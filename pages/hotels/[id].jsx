
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import   Cookies from "js-cookie";
import Link from 'next/link';
const SingleHotel = ({hotel}) => {
  const router = useRouter()
  const [user, setUser] = useState("")
useEffect(()=>{
  const check =Cookies.get("user")
setUser(check)
}, [])
  return (

    <> 
    <Head>
      <title>{hotel?.name}</title>
    </Head>
    
       <div className='w-7/12 mx-auto'>
      
          <Image
          className="w-full  my-5 h-large-box mb-3"
        src={hotel?.banner}
          height={2000}
          width={2000}
        />

        <div className='w-full my-10'>
            <h3 className='text-3xl font-bold '>{hotel?.name}</h3>
            <p className='text-xl  my-6 text-justify'>{hotel?.description}</p>
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price : &#8377; {hotel?.price}</button>
            <p className='text-3xl font-bold my-5'>
                Facilites :
            </p>
            <ul className='flex text-xl justify-between'>
                {
                  hotel?.facilities.map((item)=>(
                    <li className='flex  gap-2 items-center'>
                      <span >{item.name}</span>
                      <Image className='w-6 h-6' src={item.img} height={200} width={200}></Image>
                    </li>
                  ))
                }
            </ul>
          {
            user? <Link href={`/payment/${hotel?._id}`}> <button className="w-60 h-14 rounded-lg bg-orange-400 text-lg my-5">Book Now</button></Link>   :<button className='bg-blue-400 text-white  py-2 px-10 rounded mt-2'>Login to book</button>
          }
        </div>
    </div>
    </>

  )
}
export async function getServerSideProps(ctx){
  let res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.params.id}`)
 console.log(ctx)
   res =await res.json()
   console.log(res)
 
 return{
  props:{
    hotel:res.hotel
  }
 }
}
export default SingleHotel