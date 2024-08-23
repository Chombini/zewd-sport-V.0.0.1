"use client"
import { useState, useEffect } from 'react';
import React from "react"
import supabase from '@/supabaseConfig';
// import { useUser } from '@clerk/nextjs';
import { CircleAlert, CircleCheck, CircleCheckBig, LoaderCircle, MoreHorizontal, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
// import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Component() {

  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  // const { user } = useUser();
  // const userEmail = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    getfetchData();
}, []);

const getfetchData = async () => {
  setLoding(true)
    const { data, error } = await supabase
    .from('order')
    .select('*')
    .order('created_at', { ascending: false });
   
    if (error) {
        console.error(error);
    } else {
        setData(data);
        setLoding(false)
    }
};

const handleDelete = async (id) => {
  try {
    const { error } = await supabase
    .from('order')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting data:', error);
    toast('Error deleting data, Please try again');
  } 
  } catch (error) {
     console.error('Error deleting data:', error);
  } finally {
    getfetchData();
    toast(" Order Removed!! ",
      {action: {
      label: <Trash2 className="text-red-700 text-[15px]"/>,
    }})
  }
};

const handleSold = async (id) => {
  setIsLoading2(true);
    try {
      const { data: selectedData, error } = await supabase
      .from('order')
      .select('id, name, phoneNumber, adress, userEmail, productName, amount, total')
      .eq('id', id)
  

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

      // Insert data into the second table
      const { error: insertError } = await supabase
        .from('transactions')
        .insert(selectedData);

      if (insertError) {
        console.error('Error inserting data:', insertError);
        return;
      }

    const { error: deleteError } = await supabase
      .from('order')
      .delete()
      .match({id: id })

    if (deleteError) {
      console.error('Error deleting data:', deleteError);
      return;
    }

    } catch (error) {
      console.error('Unexpected error:', error);
      toast("Opps!! Something went wrong",
        {action: {
        label: <CircleAlert className="text-red-700"/>,
      }});
    }finally {
      setIsLoading2(false);
      toast("Successfull Sold This Item!!👍",
        {action: {
        label: <CircleCheck className="text-green-700"/>
      }});
      getfetchData();
    }
  };




  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>

              <TableHead>Customer</TableHead>

              <TableHead className="hidden sm:table-cell">Phone</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="">Address</TableHead>
              <TableHead className="">Product</TableHead>
              <TableHead className="">Quantitys</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead className="">Total</TableHead>
              <TableHead className="text-right"></TableHead>
              
            </TableRow>
          </TableHeader>
          <TableBody>

            {loding?<div className='items-center p-5 flex justify-center'>
              <LoaderCircle className="animate-spin text-gray-600"/>
            </div>:""}

           {!loding&&!data?
            <div className='items-center p-5 flex justify-center'>
                <h2 className='text-gray-500 text-[12px]'>No orders</h2>
            </div>:
            <>
              {data.map((item) => (
                 <TableRow>
                 <TableCell>
                   <div className="font-medium">{item.name}</div>
                   <div className="hidden text-sm text-muted-foreground md:inline">
                     {item.userEmail}
                   </div>
                 </TableCell>
                 <TableCell className="hidden sm:table-cell">
                   <div>{item.phoneNumber}</div>
                 </TableCell>
                 <TableCell className="hidden md:table-cell">{new Date(item.created_at).toLocaleDateString()}</TableCell>
                 <TableCell className="">{item.adress}</TableCell>
                 <TableCell className="">{item.productName}</TableCell>
                 <TableCell className="text-center">{item.quantitys}</TableCell>
                 <TableCell className="hidden md:table-cell">{item.amount}.birr</TableCell>
                 <TableCell className="">{item.total}.birr</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>

                        <DropdownMenuItem  onClick={() => handleSold(item.id)} 
                          className='text-green-500 cursor-pointer flex gap-1 items-center'>
                           <CircleCheckBig className='h-5 w-5'/>
                           <span className='mt-1'>Sold</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => handleDelete(item.id)} className='text-red-600 cursor-pointer flex gap-1 items-center'>
                            <Trash2 className='h-5 w-5'/> 
                            <span className='mt-1'>Delete</span>
                        </DropdownMenuItem>

                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                 {/* <TableCell className="text-center"><Trash2 className='text-red-400 cursor-pointer'/></TableCell> */}
               </TableRow>
            ))}
           </>
           }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
