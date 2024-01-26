import React, { useEffect, useState } from 'react'
import Block from './Block'
import Image from 'next/image'
import { LuUserCircle } from "react-icons/lu";
import Link from 'next/link';
import Cookies from "js-cookie"
const Header1 = () => {
  
  const [auth, setAuth]  = useState("")


  const logoutHandler = ()=>{
      Cookies.remove("user");
      setAuth("")

  }
 useEffect(()=>{
  setAuth(Cookies.get("user"))
 }, [Cookies, logoutHandler])
 

  return (
    <div className='flex justify-between items-center   h-20  px-10  border-b-2 border-gray-300 sticky top-0 z-20 bg-white'>
     <img src={"/logo.png"}  alt="logo"  className='w-24 h-full' />
   <div className='flex h-full'>
   <Block title={"Become a member"} para={"Additional 0% off on stays."} logo={"/first.svg"} />
   <Block title={"Oyo For Business"} para={"Trusted by 5000 Corporates."} logo={"/second.svg"}/>
   <Block title={"List your property"} para={"Start earning in 30 mins."} logo={"/third.svg"}/>
   <Block title={"0124-6201611"} para={"Call us to Book now"} logo={"/fourth.svg"}/>

   <div className='flex gap-2 items-center ml-3'>
   <LuUserCircle className='bg-gray-500 rounded-full text-white w-6 h-6'/>
  {
    auth?    <button onClick={logoutHandler}>Logout</button>: <Link href="/login"> <h3 className='font-bold'>Login / Signup</h3></Link>
  }
   </div>
   </div>
    </div>
  )
}

export default Header1