"use client"
import { UserButton,useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Gauge, LineChart, Menu, Package, Search, Settings, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import supabase from '@/supabaseConfig'

function AdminHeader() {
    const { user,isLoaded } = useUser();
    const [count,setCount] = useState(null);

    useEffect(() => {
        getCount();
      }, [user]);

      const getCount=async() =>{
        try {
            const { data, count, error } = await supabase
              .from('order')
              .select('*', { count: 'exact' })
            //   .eq()
      
            if (error) {
              console.log(error.message);
            } else {
              setCount(count);
            }
          } catch (error) {
            console.log('Unexpected error occurred:', error.message);
          }
          // console.log(fetchError);
        };

      
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image src='/logo1.png' alt="logo" width={400} height={400}/>
            </Link>

            <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">
                Dashboard
            </Link>

            <Link href="/dashboard/user-order" className="flex items-center text-muted-foreground transition-colors hover:text-foreground">
            Orders
            <span className='w-6 h-6 text-sm ml-3 text-white font-semibold flex items-center justify-center bg-primary rounded-full'>
                {count !== null ? count : 0}
            </span>
            </Link>

            <Link
                href="/dashboard/products"
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Products
            </Link>

            <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Analytics
            </Link>
            
            <Link
                href="/dashboard/settings"
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Settings
            </Link>
        </nav>

        <Sheet>
        <SheetTrigger asChild>
            <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
            >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 font-semibold">
                <Image src='/logo1.png' alt="logo" width={50} height={50}/>
            </Link>
            <Link href="/dashboard" className="flex text-muted-foreground hover:text-foreground">
                <Gauge className="mr-2"/>
                Dashboard
            </Link>
            <Link href="/dashboard/user-order" className="flex items-center text-muted-foreground hover:text-foreground">
                <ShoppingCart className="mr-2" />
                Orders
                <span className='w-6 h-6 text-sm ml-3 text-white font-semibold flex items-center justify-center bg-primary rounded-full'>
                   {count !== null ? count : 0}
                </span>
            </Link>
            <Link href="/dashboard/products" className="flex text-muted-foreground hover:text-foreground">
                <Package className="mr-2" />
                Products
            </Link>
            <Link href="#" className="flex text-muted-foreground hover:text-foreground">
                <LineChart className="mr-2" />
                Analytics
            </Link>
            <Link href="/dashboard/settings" className="flex text-muted-foreground hover:text-foreground">
                <Settings className="mr-2" />
                Settings
            </Link>
            </nav>
        </SheetContent>
        </Sheet>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
            </div>
        </form>
        {user&&isLoaded?<UserButton/>:""} 
        
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu> */}
        </div>

    </header>
  )
}

export default AdminHeader