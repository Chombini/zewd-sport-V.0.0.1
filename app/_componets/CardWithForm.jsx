"use client"
import React, { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CircleAlert } from "lucide-react"

export function CardWithForm({setName,setPhoneNumber,onSelect}) {
  const [error, setError] = useState('');
  const [phoerror, setPhoError] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);


  
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    setError(nameValue.length < 5 ? 'Name must be at least 5 characters long' : '');
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);

    // Regular expression to check if the phone number starts with 09 and is 10 digits long
    const phoneNumberRegex = /^09\d{8}$/;
    setPhoError(phoneNumberRegex.test(phoneNumber) ? '' : 'Invalid phone number format. Must start with 09 and be 10 digits long.');
  };

  // const handleAdressChange = (e) => {
  //     const AdressValue = e.target.value;
  //     setAdress(AdressValue);
  // };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    onSelect(value);
  };


 

  

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Your Items</CardTitle>
        <CardDescription>Order your new Items.(ከታች ያሉትን ባዶቦታ ላይ መረጃዎትን በትክክል ያስገቡ!!)</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="flex items-center">Name (ስም) <CircleAlert className="p-1 text-red-600"/></Label>
              <Input type="text" onChange={handleNameChange} id="name" placeholder="Enter Your Name..." />
              {error && <p className="text-red-600 text-[12px]">{error}</p>}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone" className="flex items-center" >Phone (ስልክ) <CircleAlert className="p-1 text-red-600"/></Label>
              <Input type="tel" onChange={handlePhoneNumberChange} id="phone" placeholder="Enter Your Phone Number..." />
              {phoerror && <p className="text-red-600 text-[10px] md:text-[12px]">{phoerror}</p>}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Select Your Adrress (አድራሻ)</Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" value={selectedValue}/>
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Addis-Ababa">Addis-Ababa</SelectItem>
                  <SelectItem value="Adama">Adama</SelectItem>
                  <SelectItem value="Arba-Minch">Arba-Minch</SelectItem>
                  <SelectItem value="Bahir-Dar">Bahir-Dar</SelectItem>
                  <SelectItem value="Dessie-Dar">Dessie</SelectItem>
                  <SelectItem value="Dire-Dawa">Dire-Dawa</SelectItem>
                  <SelectItem value="Gonder">Gonder</SelectItem>
                  <SelectItem value="Hawassa">Hawassa</SelectItem>
                  <SelectItem value="Harar">Harar</SelectItem>
                  <SelectItem value="Jimma">Jimma</SelectItem>
                  <SelectItem value="Jijiga">Jijiga</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
      </CardContent>
    </Card>
  )
}
