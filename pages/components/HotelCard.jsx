import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";
import   Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const HotelCard = ({data}) => {
   
  const [user, setUser] = useState("")
useEffect(()=>{
  const check =Cookies.get("user")
setUser(check)
}, [])

const router = useRouter()

  return (
    <div className=" border-t rounded-lg h-72  w-full mb-5 p-5 flex items-center gap-5">
      <div className="flex gap-1">
        <div>
          <Image alt="logo" src={data.banner} height={200} width={200} className="w-[500px] h-[215px]"></Image>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1vh]">
        <Image alt="logo" src={data.banner} height={200} width={200} className="h-12 w-20 cursor-pointer"></Image>
        <Image alt="logo" src={data.banner} height={200} width={200} className="h-12 w-20 cursor-pointer"></Image>
        <Image alt="logo" src={data.banner} height={200} width={200} className="h-12 w-20 cursor-pointer"></Image>
        <Image alt="logo" src={data.banner} height={200} width={200} className="h-12 w-20 cursor-pointer"></Image>


          
          </div>  
      
       
      </div>


{/* //second */}
      <div className="flex flex-col gap-10 justify-between w-full">
         <div>
          <h1 className="">{data.name}</h1>
          <p>{data.location}</p>
         </div>

         <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-green-500 py-1 px-2 rounded text-white text-[10px] flex items-center gap-1">{data.ratings} <IoMdStar /> </span>
            <span className="text-sm">(2278 Ratings). Excellent</span>
          </div>
          <div className="flex gap-3">
            {data.facilities.map((item, index)=>(
             <div className="flex items-center gap-1" key={index} >
              <span className="text-sm line-clamp-1">{item.name}</span>
             <Image alt="logo" src={item.img} height={200} width={200} className="w-4 h-4 flex"/>
             
             </div>
            ))}

            <div className="cursor-pointer text-sm">
              +20 more
            </div>
          </div>


          <div className="flex items-center justify-between ">
            <div className="">
            <div className="flex gap-2 items-center"><h1 className="text-xl font-bold"> ₹ {" "}{data.price}  </h1><del className="text-sm">3352</del> {" "}<span className="text-sm">72% off</span></div>
         <p className="text-sm">+145 texes & fees per room per night</p>
            </div>
            <div className="flex gap-2">
              <Link href={`/hotels/${data._id}`} className="bg-white border border-black py-1 px-4 text-sm" >View Details</Link>
           {

          user &&<button className="bg-green-500 text-white py-1 px-8 hover:bg-green-600">Book</button>  
           }
            </div>

          </div>


         </div>

      </div>
    </div>
  );
};

export default HotelCard;
