import Link from "next/link";
import { useState } from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
const Header3 = () => {

  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-56 flex items-center ">
      <div className=" flex flex-col justify-center gap-10">
        <h2 className="text-white text-3xl font-bold text-center">Over 174,000+ hotels and homes across 35+ countries</h2>
       <div className="flex justify-center items-center  mx-72" >
        <div className="relative"> <input type="location" className="h-12 outline-none border-r border-3 w-96   border-gray-300 text-lg  pl-2" value={city} onChange={(e)=> setCity(e.target.value)}  placeholder="Serch by city...." /> <div className="absolute top-3 right-3 bg-gray-200 px-2 cursor-pointer rounded-xl py-1 flex gap-2 items-center" ><MdOutlineLocationSearching  /><span className="text-[12px]">Near me</span></div> 
</div>
      
        <input type="date" placeholder="Search..." className="h-12   px-2 outline-none  border-gray-300 text-lg w-56  border-r border-3 " />
        <input type="date" className="px-2 h-12 outline-none  border-r border-3   border-gray-300 text-lg  w-56" placeholder="Search..."/>
       <Link href={`hotels?city=${city}`}>
       <input type="button" value={"Serach"} className="bg-green-500 text-xl text-white h-12 px-4  hover:cursor-pointer hover:bg-green-600" /></Link>
    
       </div>
      </div>
    </div>
  );
};

export default Header3;
