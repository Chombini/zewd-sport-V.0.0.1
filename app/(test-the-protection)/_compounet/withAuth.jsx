"use client"
import supabase from '@/supabaseConfig';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function withAuth(Component){
    return function WithAuth(props) {
        const [users, setUser] = useState(null)
        const { user } = useUser();
        const userEmail = user?.primaryEmailAddress?.emailAddress;

    useLayoutEffect(() => {
        console.log(userEmail)
        console.log(users)
 
        if(userEmail === users){
          
        } else {
          redirect("/")
        }
       }, [user&&users]);
 
       useEffect(() => {
         getCartItems();
        }, []);
 

    const getCartItems = async() =>{
        try {
            const { data: supabaseUser } = await supabase
            .from('adminUser')
            .select('email')

            setUser(supabaseUser[0].email)

        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      if(!userEmail === users){
          return null;
       }
       
       return <Component {...props}/>
    }
}