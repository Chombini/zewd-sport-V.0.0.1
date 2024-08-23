// "use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { sessionStatus } from "../_utili/settetion"
import { useUser, currentUser  } from '@clerk/nextjs';
import supabase from '@/supabaseConfig';
import { redirect } from 'next/navigation';
// import withAuth from '../_compounet/withAuth';


async function page () {

  return (
    <div>
        page1
    </div>
  )
}

export default page

   // const [users, setUser] = useState("")
    // const { user } = useUser();
    // const userEmail = user?.primaryEmailAddress?.emailAddress;
    // // // const [users, setUser] = useState("");

    // useEffect(() => {
    //    console.log(userEmail)
    //    console.log(users)

    //    if(!userEmail === users){
    //     redirect("/")
    //    }
    //   }, [user&&users]);

    //   useEffect(() => {
    //     getCartItems();
    //    }, []);

    // const getCartItems = async() =>{
    //     try {
    //         const { data: supabaseUser } = await supabase
    //         .from('adminUser')
    //         .select('email')

    //         setUser(supabaseUser[0].email)

    //     } catch (error) {
    //       console.error('Error fetching user data:', error);
    //     }
    //   };
    



  
   
    //   function myFunction() {
    //     const isValidSession = await sessionStatus();
    //     if (isValidSession) {
    //       // User has a valid session
    //     } else {
    //       // User does not have a valid session
    //     }
    //   }
