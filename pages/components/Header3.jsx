import Link from "next/link";
import { useState } from "react";

const Header3 = () => {

  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-56 flex flex-col justify-center items-center">
      <div className=" ">
        <h2 className="text-white text-3xl font-bold text-center">Over 174,000+ hotels and homes across 35+ countries</h2>
       <div className="grid grid-cols-5 my-5 mx-48" >
       <input type="location" className="h-12 outline-none border-r border-3  border-gray-300 text-lg col-span-2" value={city} onChange={(e)=> setCity(e.target.value)}  placeholder="Location" />
        <input type="" placeholder="Search..." className="h-12 outline-none  border-gray-300 text-lg  border-r border-3 col-span-1" />
        <input type="text" className="h-12 outline-none  border-r border-3  border-gray-300 text-lg col-span-1" placeholder="Search..."/>
       <Link href={`hotels?city=${city}`}>
       <input type="button" value={"Serach"} className="bg-green-500 text-xl text-white h-12 px-2 col-span-1 hover:cursor-pointer hover:bg-green-600" /></Link>
    
       </div>
      </div>
    </div>
  );
};

export default Header3;
