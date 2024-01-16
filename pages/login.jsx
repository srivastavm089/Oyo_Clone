import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { useRouter } from "next/router";
const Login = () => {
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [login, setLogin ] = useState(false)
  const router = useRouter()


  useEffect(()=>{
  if(Cookies.get("user")){
    router.push("/")
  }
  }, [])
const loginHandler = async(e)=>{
 e.preventDefault();
const res = await axios.post("http://localhost:3000/api/user/login", {
  email, password
})

if(res?.data){
  Cookies.set("user",res.data.token, {expires:7})
  router.back()
 
}

const registerHandler = async(e)=>{
  e.preventDefault();
  const res = await axios.post("http://localhost:3000/api/user/register", {
    name, email, password
  })
  
  if(res?.data){
    Cookies.set("user",res.data.token, {expires:7})
    router.back()
  }
}
  return (
    <div className="login_container h-screen w-full ">
      <Head>
        <title>OYO - Login </title>
      </Head>
      <div className="flex items-center gap-4 mx-20">
        <Image
          src={"/loginLogo.svg"}
          width={200}
          height={200}
          alt="logo"
          className="w-20 h-20"
        />
        <div>
          <p className="text-white font-bold">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
      </div>

      <div className="flex items-center gap-20 justify-center">
        <div className="w-96">
          <p className="font-bold text-3xl text-white  w-96">
            There’s a smarter way to OYO around
          </p>
          <p className="text-sm text-white">
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </p>
        </div>
        <div className="bg-white w-96 flex flex-col gap-2">
          <h3 className="bg-gradient-to-l from-red-600 to-red-400 pl-2 text-white h-8 flex items-center ">Sign up & Get ₹500 OYO Money</h3>
          <div className="py-10 pb-20 px-10 flex flex-col gap-4 ">

          <h1 className="text-3xl font-bold">Login / Signup</h1>

<div className="flex flex-col gap-5 ">
 <p>Please enter your email to continue</p>

  <div className={` gap-4  border-2 h-10 ${login? "hidden":"block"}`} >

     <input type="text" className={`outline-none border w-full h-full text-xl pl-2 `}  value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter your name...." />
     
  </div>
  <div className=" gap-4  border-2 h-10" >

<input type="text" className="outline-none border w-full h-full text-xl pl-2" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="Enter your email....." />

</div>
<div className="gap-4  border-2 h-10" >

<input type="password" className="outline-none border w-full h-full text-xl pl-2" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Enter password...." />

</div>
 {
  !login &&  <button className="bg-orange-500 text-white py-2 px-2 w-full " onClick={registerHandler}>Register</button>
 }

  {
    login && <button className="bg-orange-500 text-white py-2 px-2 w-full " onClick={loginHandler}>Login</button>  
  }

 {
  !login &&  <div className="flex gap-2"><p>Already have an account?</p><button  className="text-red-500 hover:text-blue-500 font-bold" onClick={()=> setLogin(true)}>Login</button></div>

 }

{
  login &&  <div className="flex gap-2"><p>Create Account</p><button  className="text-red-500 hover:text-blue-500 font-bold" onClick={()=> setLogin(false)}>Register</button></div>
}
  
</div>
          </div>
          


        </div>
      </div>
    </div>
  );
};

export default Login;
