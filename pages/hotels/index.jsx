import React, { use, useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import Header1 from "../components/Header1";
import RangeSlider from "../components/Slider";
import axios from "axios";
import   Cookies from "js-cookie";
import Loader from "../components/Loader";
import { useRouter } from "next/router";
import Image from "next/image";
const Hotels = ({ hotels }) => {
  const [value, setValue] = React.useState([499, 20000]);
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);
 const router = useRouter()

  const priceFetch = async () => {
    setLoader(true);
    let { data } = await axios.get(
      `http://localhost:3000/api/filter?price=${value}`
    );

    setList(data.hotel);

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  const [user, setUser] = useState("")
  useEffect(()=>{
    const check =Cookies.get("user")
  setUser(check)
  }, [])






  const searchHandler = async (e) => {
    //api work
    setLoader(true);
    if (e.target.value !== "") {
      let { data } = await axios.get(
        `http://localhost:3000/api/filter/${e.target.value}`
      );
      setList(data.hotels);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }else{
      priceFetch()
    }
      
    
  };

  useEffect(() => {
    priceFetch();
  }, [value]);

  return (
    <div className=" m-5 ">
      <Header1 />

      <div className="grid grid-cols-12  relative">
        <div className="col-span-3 h-screen border-r flex flex-col   pt-5  gap-4 overflow-y-scroll fixed " id="first-scroll">
          <h1 className="font-bold text-2xl">Filters</h1>
          <input
            className="border outline-none w-72  text-lg pl-2"
            type="text"
            placeholder="Search...."
            onChange={(e) => searchHandler(e)}
          />

          <div className="border-b ml-5">
            <p className="font-bold">Price</p>
            <RangeSlider value={value} setValue={setValue} />
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

        <div
          className={`mt-2 col-span-9 h-full    overflow-y-auto fixed ${
            loader ? "left-[52vw] top-[50vh] w-56 py-4  " : "right-2"
          }`}
        >
          {loader ? (
            <Loader />
          ) : (
            <div>

             {
              !user && <div className="bg-red-500 flex mx-5 text-white justify-between items-center px-10 py-4">
              <Image src={"/login.svg"} width={200} height={200}/>
              <div className="flex justify-center flex-col items-center">
                <h1 className="text-2xl">Login now to get upto 15% lower prices</h1>
                <p className="text-lg">Enjoy up to 15% extra discount on your bookings</p>
              </div>
              <div>
                <button className="bg-white  text-red-600 cursor-pointer py-2 px-12 " onClick={()=> router.push("/login")}>Login</button>
              </div>
              </div>
             }
              {list.length !== 0
                ? list &&
                  list.map((item) => {
                    return <HotelCard data={item} />;
                  })
                : hotels &&
                  hotels.map((item) => {
                    return <HotelCard data={item} />;
                  })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  let res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );

  res = await res.json();

  return {
    props: {
      hotels: res.hotels,
    },
  };
}

export default Hotels;
