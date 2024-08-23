"use client"
import { CardWithForm } from '@/app/_componets/CardWithForm'
import { useRouter } from 'next/navigation'
import OrderHeader from '@/app/_componets/OrderHeader'
import { Button } from '@/components/ui/button'
import { CircleAlert, CircleArrowRight, CircleArrowUp, CircleCheck, LoaderCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import supabase from '@/supabaseConfig'
import { toast } from 'sonner'

function OrderItems() {
  const { user,isLoaded } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [total, setTotal] = useState(0);   
  const [isLoading, setIsLoading] = useState(false);

  // handling the User Information
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adress,setAdress] = useState('');
  const router = useRouter();

  const handleSelect = (value) => {
    console.log('Selected address:', value);
    setAdress(value)
  };
  
  useEffect(() => {
    getCartItems();
  }, [user]);


  useEffect(()=>{
    let total = 0;
    data.forEach(element => {
      total=total+element.amount
    });
    setTotal(total.toFixed(2))
  },[data])



const handleClick = async () => {
  setIsLoading(true)
    try {
      const { data: fetchedData, error } = await supabase
        .from('cart')
        .select('*')
        .eq('userEmail', userEmail)

      if (error) {
        toast("Opps!! Something went wrong, please try again",
          {action: {
          label: <CircleAlert className="text-red-700"/>,
        }});
        console.error('Error fetching data:', error);
        return;
      }

      const processedData = fetchedData.map(item => ({
        // Transform data for insertion into the second table
        name: name,
        phoneNumber: phoneNumber,
        adress: adress,
        userEmail: userEmail,
        productName: item.productName,
        quantitys: item.quantitys,
        amount: Math.floor(item.amount),
        productImg: item.productImg,
        total: Math.floor(total)
        // ... other columns
      }));

      // Insert data into the second table
      const { data: insertedData, error: insertError } = await supabase
        .from('order')
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
      toast("Successfully You Ordered!, Coming soon👍",
        {action: {
        label: <CircleCheck className="text-primary"/>
      }}); 
      router.push('/thank-you')
    }
    
  };
  

  const getCartItems=async() =>{
    try {
      const { data, error } = await supabase
        .from('cart')
        .select('*')
        .eq('userEmail', userEmail)


      if (error) {
        setFetchError(error.message);
      } else {
        setData(data);
      }
    } catch (error) {
      setFetchError('Unexpected error occurred.');
    } finally {
    }
  };


  


  // Dilivery Logic

  // const calulateTotal = () => {
  //   const totalAmount = (total+300);
  //   return totalAmount.toFixed(2)
  // }


  return (
    <div className='max-h-full'>

      <div className="w-full sticky">
        <OrderHeader/>
      </div>

      <div className='flex justify-center items-center pt-6'>
        <div className='w-96 h-full md:w-[600px] flex justify-center items-center'>
          <div className='w-full mx-10'>
            <CardWithForm setName={setName} setPhoneNumber={setPhoneNumber} onSelect={handleSelect}/>
            <h1 className='p-3 bg-gray-200 font-bold text-center'>Total Cart ({total}birr)</h1>
            <hr></hr>
            <h2 className='flex justify-between'>Delivery: <span>300:00Birr</span></h2>
            <h2 className='flex justify-between'>Tax: <span>15%</span></h2>
            <hr></hr>
            <h2 className='font-bold flex justify-between py-2'>Total : <span>{total}Birr</span></h2>
           {name&&phoneNumber?<Button onClick={handleClick} disabled={isLoading} className='w-full font-semibold text-[18px]'>
              <CircleArrowRight className='mr-2'/>
              {isLoading? <LoaderCircle className="animate-spin"/>: "Order"}  
            </Button>:
            <Button onClick={handleClick} disabled={true} className='w-full font-semibold text-[18px]'>
              <CircleArrowUp className='mr-2'/>
               Please Fill the fields to Order!!
            </Button>}
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default OrderItems