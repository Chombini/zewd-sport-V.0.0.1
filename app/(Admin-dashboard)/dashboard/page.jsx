"use client"
import React, { useEffect, useState } from 'react'
import {
  Activity,
  Calendar,
  CreditCard,
  DollarSign,
  LoaderCircle,
  Users,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
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
import supabase from '@/supabaseConfig'
import { toast } from 'sonner'
import { redirect } from 'next/navigation';



function page() {

  

  

     const [loding, setLoding] = useState(false);
     const [data, setData] = useState([]);

    useEffect(() => {
        getfetchData();
      }, []);

    const getfetchData = async () => {
        setLoding(true)
          const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false });
         
          if (error) {
              toast("Opps!, Something is Wrong, Please Chack Your internet connection!!",
                {action: {
                label: <CircleAlert className="text-red-700"/>,
              }});
          } else {
              setData(data);
              setLoding(false)
          }
      };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Sales
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">45,231.89 Birr</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Number of Users/Order
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales of Item</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                    +19% from last month
                </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                    +201 since last hour
                </p>
                </CardContent>
            </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>
                    Recent transactions from your store.
                    </CardDescription>
                </div>
                {/* <Button asChild size="sm" className="ml-auto gap-1">
                    <Link href="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button> */}
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>

                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden xl:table-column">
                          Date
                        </TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>

                    </TableHeader>

                    {loding?<div className='items-center p-5 flex justify-center'>
                      <LoaderCircle className="animate-spin text-gray-600"/>
                     </div>:""}

                    <TableBody>

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
                                        <span className='text-[11px] flex'> Date: {new Date(item.created_at).toLocaleDateString()}</span>
                                        <span className='text-[11px] flex'> Phone: 0{item.phoneNumber}</span>
                                    </div>
                                    </TableCell>

                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        {new Date(item.created_at).toLocaleDateString()}
                                    </TableCell>

                                    <TableCell className="text-right">{item.total}.Birr</TableCell>

                                </TableRow>
                            ))}
                            </>
                            }
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                <CardTitle>Customers</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                        Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                    </p>
                    </div>
                    <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                        Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                        jackson.lee@email.com
                    </p>
                    </div>
                    <div className="ml-auto font-medium">+$39.00</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                        Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                        isabella.nguyen@email.com
                    </p>
                    </div>
                    <div className="ml-auto font-medium">+$299.00</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                        William Kim
                    </p>
                    <p className="text-sm text-muted-foreground">
                        will@email.com
                    </p>
                    </div>
                    <div className="ml-auto font-medium">+$99.00</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                        Sofia Davis
                    </p>
                    <p className="text-sm text-muted-foreground">
                        sofia.davis@email.com
                    </p>
                    </div>
                    <div className="ml-auto font-medium">+$39.00</div>
                </div>
                </CardContent>
            </Card>
        </div>
    </main>
  )
}

export default page