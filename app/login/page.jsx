"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import supabase from "@/supabaseConfig";
import { useUser } from '@clerk/nextjs'
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [emailSupa, setEmailSupa] = useState(null);
  const [passwordSupa, setPasswordSupa] = useState(null);
  const [isLoading2, setIsLoading2] = useState(false);
  const router = useRouter();
  const { user,isLoaded } = useUser();
  

  useEffect(() => {
    getData();
  }, [isLoaded]);

  const getData=async() =>{
    try {
      const { data, error } = await supabase
        .from('adminUser')
        .select('*')

      if (error) {
        console.log(error.message);
      } else {
        setData(data);
        setEmailSupa(data[0].email);
        setPasswordSupa(data[0].password);
      }
    } catch (error) {
        toast("Opps!! Something is wrong, Please Check your internet connection and try again",
            {action: {
            label: <CircleAlert className="text-red-700"/>,
            }});
      console.log('Unexpected error occurred.', error.message);
    }
  };

const handleSubmit = (e) => {
    setIsLoading2(true);
    e.preventDefault();
    if (email === emailSupa && password === passwordSupa) {
      document.cookie = `authenticated=true; path=/`;
      router.push("/dashboard");
      toast("Succsesfully Login!!",
        {action: {
        label: <CircleCheck className="text-primary"/>,
      }})
    } else {
      toast("Opps!! Something is wrong, Please try again later",
        {action: {
        label: <CircleAlert className="text-red-700"/>,
        }});
      setIsLoading2(false);
    } 
  };

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Please Inter your Email and Password.</CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Enter Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="Enter Your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Button type="submit" disabled={isLoading2}>{isLoading2? <LoaderCircle className="animate-spin"/>:"Login"}</Button>
                </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between">
           
            </CardFooter>
        </Card>
    </div>
  );
}


 
