import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";
const Header2 = () => {
 const router = useRouter()
  const list =[
    {
      name:"Banglore",

    },
    {
      name:"Chennai",

    },
    {
      name:"Delhi",

    },
    {
      name:"Gurgaon",

    },
    {
      name:"Hydrabad",

    },
    {
      name:"Kolkata",

    },
    {
      name:"Mumbai",

    },
    {
      name:"Noida",

    },
    {
      name:"Pune",

    },

  ]
  return (
    <div>
      <div className="flex px-5 h-10 items-center bg-gray-100 justify-between">
{
  list.map((item, indexx)=>(
    <div key={indexx} className="city-hover flex items-center gap-1  cursor-pointer hover:bg-slate-200 px-2 h-full">{item.name} <IoIosArrowDown className="opacity-40 child" /></div>
  ))

  
}
<div className="flex  items-center cursor-pointer" onClick={()=> router.push("/cities")}>All City </div>



      </div>
    </div>
  );
};

export default Header2;
