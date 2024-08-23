"use client"
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/supabaseConfig'
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CircleAlert, CircleCheck, LoaderCircle, ShoppingCart } from 'lucide-react';
import { useUser } from '@clerk/nextjs'
import { UpdateCartContext } from '../_context/UpdateCartContext';

function AddToCartButton({ product, quantitys }) {
    const {updateCart,setUpdateCart} =useContext(UpdateCartContext)
    
    const {user}= useUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress
    const productName = product?.name
    const productImg = product?.img

    const router = useRouter();
    const [loding,setLoding]=useState(false);
    
    

  const addToCard = async () => {
    setLoding(true);

    if (!user) {
       router.push('/sign-in')
       toast("You are not Signin, Please SignUp!!",
        {action: {
        label: <CircleAlert className="text-red-700"/>,
      }});
    } else {
       
      const amount = (quantitys * product.price).toFixed(2);
      const amountAsInteger = Math.floor(amount);
  
      const { data, error } = await supabase
        .from("cart")
        .insert([{ quantitys, amount:amountAsInteger, userEmail , productName , productImg}]);
  
      if (error) {
        toast("Opps!! Something is wrong, Please try again",
          {action: {
          label: <CircleAlert className="text-red-700"/>,
        }});
      } else {
          toast("Succsesfully Added In to Cart!!",
            {action: {
            label: <CircleCheck className="text-primary"/>,
          }})
          setLoding(false);
          setUpdateCart(!updateCart)
        }

    }
  };


  
  return (
    <Button className="flex gap-5" onClick={addToCard} disabled={loding}>
      <ShoppingCart />
      {product? (loding? (
        <LoaderCircle className="animate-spin" />
      ) : (
        "Add to Cart"
      )) : (
        "Loading..."
      )}
    </Button>
  )
}

export default AddToCartButton