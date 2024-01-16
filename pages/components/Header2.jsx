import { IoIosArrowDown } from "react-icons/io";
const Header2 = () => {
 
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
      <div className="flex px-5 items-center bg-gray-100 justify-between">
{
  list.map((item, indexx)=>(
    <div key={indexx} className="flex items-center gap-1 py-1">{item.name} <IoIosArrowDown className="opacity-40 " /></div>
  ))

  
}
<div className="flex  items-center">All City <IoIosArrowDown className="opacity-40 " /> </div>



      </div>
    </div>
  );
};

export default Header2;
