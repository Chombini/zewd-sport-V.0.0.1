"use client"
import Link from "next/link"
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
import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function page() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-1">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-3 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">

          <nav className="sm:grid gap-4 text-sm text-muted-foreground flex" x-chunk="dashboard-04-chunk-0">
            <Link href="#" className="font-semibold text-primary">
              General
            </Link>
            <Link href="#">Security</Link>
            <Link href="#">Advanced</Link> 
            {/* 
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            */}
          </nav>

          <div className="grid gap-6">

            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Admin Setting</CardTitle>
                <CardDescription>
                  You can change the Admin Information Here,<span className="text-red-500 pl-1">   Please Fill The Information Correctly.</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="flex flex-col gap-4">
                  <div>
                    <h4>Change Email</h4>
                    <Input
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>

                  <div>
                    <h4>Change Password</h4>
                    <Input
                      placeholder="Your Password"
                      type="password"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>HomePage Setting</CardTitle>
                <CardDescription>
                  You can change the Contentes of your website, Change your Files and text.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="flex flex-col gap-4">
                  <div>
                    <h4>Title</h4>
                    <Input
                      placeholder="Your Title"
                    />
                  </div>

                  <div>
                    <h4>Change HomePage Image</h4>
                    <Input
                      type="file"
                      className="text-[10px]"
                    />
                  </div>
                  <div>
                    
                  <h4>Sub-title</h4>
                  <Textarea
                    placeholder="Type Your Sub-title"
                  />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Store Category</CardTitle>
                <CardDescription>
                  Used to add more categorys in your store. Add any catgory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Category Name" />
                </form>
                <div className="flex py-3 gap-2 text-[10px] text-white">
                 <p className="bg-primary px-1 py-0.5 rounded-sm ">Jakcets</p>
                 <p className="bg-primary px-1 py-0.5 rounded-sm ">Balls</p>
                 <p className="bg-primary px-1 py-0.5 rounded-sm ">T-Shirt</p>
                 <p className="bg-primary px-1 py-0.5 rounded-sm ">Jakcets</p>
              </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            
          </div>

        </div>
      </main>
    </div>
  )
}

export default page
