"use client"
import supabase from '@/supabaseConfig';
import { useUser } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs/server'


export const sessionStatus = async () => {
    const { user } = useUser();

  if (!user) {
    return false; // User is not logged in with Clerk
  }

  const { data: supabaseUser } = await supabase
    .from('your_table_name')
    .select('email')
    .eq('email', user?.primaryEmailAddress?.emailAddress)
    .single();


  if (supabaseUser && supabaseUser.email === user?.primaryEmailAddress?.emailAddress) {
    return true; // User exists in Supabase and email matches Clerk user
  } else {
    return false; // User doesn't exist in Supabase or email doesn't match
  }
};


// import { useUser } from '@clerk/nextjs';

// const sessionSetutes = async () => {
//     const { user } = useUser();
//     const userEmail = user?.primaryEmailAddress?.emailAddress;

//     if (user) {
//         try {
//             const { data: userFromDB } = await supabase
//                 .from('adminUser')
//                 .select(*);

//             if (userEmail) {
//                 return true;
//             }
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     }

//     return false;
// };


 // if (user && userEmail === user) {
    //     setValue(true)
    //   } else(
    //     setValue(false)
    //   )

    // export const sessionSetutes = false;