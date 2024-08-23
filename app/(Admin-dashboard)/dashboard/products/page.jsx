"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import supabase from '@/supabaseConfig'
import {
  CircleAlert,
  DeleteIcon,
  File,
  LoaderCircle,
  MoreHorizontal,
  PlusCircle,
  Trash2,
} from "lucide-react"

import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/components/ui/input'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"





function page() {
  const [productname, setProductname] = useState('');
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0);
  const [noPrice,setNoPrice] = useState(0);
  const [items,setItems] = useState(0);
  const [dis,setDis] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [isLoding, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  // const [error, setError] = useState('');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const handleFileChange = event => {
    setFile(event.target.files[0]);
};

  const handleProductname = (e) => {
    const nameValue = e.target.value;
    setProductname(nameValue);
  };

  const handleDis = (e) => {
    const nameValue = e.target.value;
    setDis(nameValue);
  };

  const handleItems = (e) => {
    const nameValue = e.target.value;
    setItems(nameValue);
  };

  const handleNoPrice = (e) => {
    const nameValue = e.target.value;
    setNoPrice(nameValue);
  };

  const handlePrice = (e) => {
    const nameValue = e.target.value;
    setPrice(nameValue);
  };

  const handleClick = async () => {
    setIsLoading(true)
      try {
        if(!file) {
          toast("Please Upload Files",
            {action: {
            label: <CircleAlert className="text-red-700"/>,
          }});
          return;
      }

      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}${fileExt}`;
      const filePath = `${fileName}`;

      let { error } = await supabase.storage
      .from("images")
      .upload(filePath, file);

      if (error) {
          throw error;
      }

      const { data: url } = await supabase.storage
      .from("images")
      .getPublicUrl(filePath);
      // setFileUrl(url.publicUrl);
      console.log(url.publicUrl)

        const processedData = {
          // Transform data for insertion into the second table
          name: productname,
          numItems: items,
          catagory: selectedValue,
          img: url.publicUrl,
          dic: dis,
          price: Math.floor(price),
          noprice: Math.floor(noPrice),
          // ... other columns
        };
  
        // Insert data into the second table
        const { data: insertedData, error: insertError } = await supabase
          .from('data')
          .insert(processedData);
  
        if (insertError) {
          console.error('Error inserting data:', insertError);
        } 
      } catch (error) {
        console.error('Unexpected error:', error);
        toast("Opps!! Something went wrong",
          {action: {
          label: <CircleAlert className="text-red-700"/>,
        }});
      }finally {
        setIsLoading(false);
        toast("Successfully You Uploaded!👍",
          {action: {
          label: <CircleAlert className="text-green-700"/>
        }});
        getfetchData();
      }
    };


  const handleDelete = async (id) => {
    setIsLoading2(true);
    try {
      const { error } = await supabase
      .from('data')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting data:', error);
      toast('Error deleting data, Please try again');
    } 
    } catch (error) {
       console.error('Error deleting data:', error);
    } finally {
      setIsLoading2(false);
      getfetchData();
      toast(" Product Removed!! ",
        {action: {
        label: <Trash2 className="text-red-700 text-[20px]"/>,
      }})
    }
  };

useEffect(() => {
  getfetchData();
}, []);

const getfetchData = async () => {
  setLoding(true)
    const { data, error } = await supabase
    .from('data')
    .select('*');
   
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
    <main className="grid flex-1 items-start gap-4 p-5 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center m-1">
          <div className="ml-auto flex items-center gap-2">
            
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                    <DialogDescription>
                      Upload Your Product to your store here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        className="col-span-3"
                        onChange={handleProductname}
                        placeholder="Enter name..."
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Price
                      </Label>
                      <Input
                        id="username"
                        className="col-span-3"
                        type="number"
                        onChange={handlePrice}
                        placeholder="Enter price..."
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        No.Price
                      </Label>
                      <Input
                        id="name"
                        className="col-span-3"
                        type="number"
                        onChange={handleNoPrice}
                        placeholder="Enter no.price..."
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Number Of Items
                      </Label>
                      <Input
                        id="name"
                        className="col-span-3"
                        type="number"
                        onChange={handleItems}
                        placeholder="Enter Number of Items..."
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Discrptions
                      </Label>
                      <Input
                        id="username"
                        className="col-span-3"
                        onChange={handleDis}
                        placeholder="Enter discrption..."
                      />
                    </div>

                    <div className="flex flex-row space-y-0.5 gap-2 items-center">
                      <Label htmlFor="framework">Catgory</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" value={selectedValue}/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="Jersey-for-kids">Jersey for kids</SelectItem>
                          <SelectItem value="Jersey-for-adults">Jersey for adults</SelectItem>
                          <SelectItem value="Sport-Equipment">Sport Equipment</SelectItem>
                          <SelectItem value="Balls">Balls</SelectItem>
                          <SelectItem value="Medals">Medals</SelectItem>
                          <SelectItem value="Socks for kids">Socks for kids</SelectItem>
                          <SelectItem value="Socks for adults">Socks for adults</SelectItem>
                          <SelectItem value="Cones">Cones</SelectItem>
                          <SelectItem value="Shinguard">Shinguard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Image
                      </Label>
                      <Input
                        id="username"
                        className="col-span-3"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>


                  </div>
                  <DialogFooter>
                    <Button onClick={handleClick} disabled={isLoding} type="submit">
                      {isLoding? <LoaderCircle className="animate-spin"/>: "Save"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
            </Dialog>

          </div>
        </div>


        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Catagory</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">No.Price</TableHead>
                    <TableHead className="hidden md:table-cell">Number of Items</TableHead>
                    <TableHead className="hidden md:table-cell">Discription</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>

                {loding?
                <div className='items-center p-5 flex justify-center'>
                  <LoaderCircle className="animate-spin text-gray-600"/>
                </div>:""}

                {!loding&&!data?
                    <div className='items-center p-5 flex justify-center'>
                        <h2 className='text-gray-500 text-[12px]'>No orders</h2>
                    </div>:
                    <>
                      {data.map((item) => (
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              src={item.img}
                              height="64"
                              width="64"
                            />
                          </TableCell>

                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell><Badge variant="outline">{item.catagory}</Badge></TableCell>
                          <TableCell className="hidden md:table-cell">{item.price}.Birr</TableCell>
                          <TableCell className="hidden md:table-cell">{item.noprice}.Birr</TableCell>
                          <TableCell className="hidden md:table-cell text-center">{item.numItems}</TableCell>
                          <TableCell className="hidden md:table-cell">{item.dic}</TableCell>

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
                                {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
                                <DropdownMenuItem onClick={() => handleDelete(item.id)} className='text-red-600 cursor-pointer flex gap-1 items-center'>
                                  <Trash2 className='h-5 w-5'/> 
                                  <span className='mt-1'>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </>}
  
              

                

                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default page