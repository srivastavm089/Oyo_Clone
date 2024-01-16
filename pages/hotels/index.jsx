import React, { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import Header1 from "../components/Header1";
import RangeSlider from "../components/Slider";
import axios from "axios";
const Hotels = ({ hotels }) => {
  const [value, setValue] = React.useState([499, 1000]);
  const [list, setList] = useState([])
  const priceFetch = async()=>{
     let {data} = await axios.get(`http://localhost:3000/api/filter?price=${value}`);
   
    setList(data.hotel)
    console.log(data)
  }
useEffect(()=>{
      priceFetch()
}, [value])

  return (
    <div className=" m-5 ">
      <Header1 />

      <div className="grid grid-cols-12">
        <div className="col-span-3 h-full border-r flex flex-col  pt-5 pr-3 gap-4">
          <h1>Filters</h1>
          <input
            className="border outline-none w-72 h-8 text-lg"
            type="Search....."
          />

          <div className="border-b">
            <p className="font-bold">Price</p>
            <RangeSlider value={value} setValue={setValue}  />
          </div>

          <div className="flex flex-col gap-4 border-b py-5">
            <h1 className="font-bold">Collections</h1>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span className="">Family OYO's</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>For Group Travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Local IDs accepted</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYOs welcome couples</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Busniess travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYO Recommended</span>
            </div>
          </div>


          <div className="flex flex-col gap-4 border-b py-5">
            <h1 className="font-bold">Categories</h1>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span className="">Family OYO's</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>For Group Travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Local IDs accepted</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYOs welcome couples</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Busniess travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYO Recommended</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b py-5">
            <h1 className="font-bold">Accomodation Type</h1>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span className="">Family OYO's</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>For Group Travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Local IDs accepted</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYOs welcome couples</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Busniess travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYO Recommended</span>
            </div>
          </div>




          <div className="flex flex-col gap-4 border-b py-5">
            <h1 className="font-bold">Hotel Facilities</h1>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span className="">Family OYO's</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>For Group Travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Local IDs accepted</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYOs welcome couples</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Busniess travellers</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>OYO Recommended</span>
            </div>
          </div>

      
         
        </div>
        <div className="mt-2 col-span-9">
         {
          list.length!==0?    list &&
            list.map((item) => {
              return <HotelCard data={item} />;
            }): hotels &&
            hotels.map((item) => {
              return <HotelCard data={item} />;
            })
         }
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  let res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`);

  res = await res.json();

  return {
    props: {
      hotels: res.hotels,
    },
  
  };
}

export default Hotels;
