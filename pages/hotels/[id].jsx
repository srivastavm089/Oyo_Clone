
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Header1 from "../components/Header1";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import StarIcon from "@mui/icons-material/Star";


const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SingleHotel = ({ hotel }) => {
  const router = useRouter();

  const [user, setUser] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    const check = Cookies.get("user");
    setUser(check);
  }, []);

  const rightHandler = () => {
    scrollRef.current.scrollLeft += 500;
  };
  const leftHandler = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  const dataHandler = (e) => {
    console.log("this", e.selection);
  };

  const customStyles = {
    // Customize styles as needed
    Calendar: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    MonthAndYear: {
      display: "none", // Hide the month and year header
    },
    Weekday: {
      display: "none", // Hide the week labels
    },
  };
  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <Header1 />
      <div className="relative w-full">
        <div
          className="flex gap-1  overflow-x-scroll hotel-scroll scroll-smooth "
          ref={scrollRef}
        >
          {hotel?.gallery.map((img) => {
            return (
              <Image src={img} width={500} height={500} className="h-[55vh]" />
            );
          })}

          <ChevronRightIcon
            className="bg-white  absolute right-0 rounded-full w-12 h-12 text-red-500 cursor-pointer top-40 shadow-lg shadow-gray-500/50"
            onClick={rightHandler}
          />
          <ChevronLeftIcon
            className="bg-white absolute   rounded-full w-12 text-red-500 cursor-pointer h-12 top-40 shadow-lg shadow-gray-500/50"
            onClick={leftHandler}
          />
        </div>

        <div className="px-36 mt-12 grid gap-20 grid-cols-12">
          <div className=" col-span-8 ">
            {/* left */}

            <div className="flex  gap-10">
              <div>
                <h1 className="text-3xl font-bold"> {hotel.name}</h1>
                <p>{hotel.description}</p>
                <div className="flex ">
                  <Image
                    src={"/townhouse.svg"}
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-20 h-12"
                  />
                  <Image
                    src={"/wizard.svg"}
                    width={200}
                    alt="logo"
                    height={200}
                    className="w-12 h-6"
                  />
                </div>
              </div>
              <div>
                <p className="bg-green-500 text-white  w-20 h-10 gap-1  flex items-center py-1 px-8 justify-center">
                  {hotel.ratings} <StarIcon className="text-xl " />
                </p>
                <span className="text-[10px] text-center w-20 bg-gray-400 py-1 px-3 text-white">
                  1809 Ratings
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Amenities</h1>
              <div className="grid grid-cols-3 w-6/12 gap-4 mt-4">
                {hotel?.facilities.map((item) => {
                  return (
                    <div key={item} className="flex items-center gap-2">
                      <Image
                        src={item.img}
                        height={200}
                        width={200}
                        className="w-4 h-4"
                      />
                      <p className="whitespace-nowrap">{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" my-10">
              <h1 className="text-3xl font-bold">About this OYO</h1>
              <p className="mt-5">
                Did you know that we’ve got 2.5 Crore bookings since March 2020?
                And this is all thanks to the sanitisation & safety measures
                followed at our properties, from disinfecting surfaces with
                high-quality cleaning products and maintaining social distance
                to using protective gear and more.
              </p>
              <button className="mt-2">Read More</button>
            </div>

            <div className="">
              <h1 className="text-3xl font-bold ">Choose your room</h1>
              <p className="flex mt-5 items-center gap-2 bg-gradient-to-r from-slate-500 to-slate-100 py-1 px-2">
                {" "}
                <StarIcon className="text-[gold] text-lg " />
                <span>SELECTED CATEGORY</span>
              </p>
              <div className="border flex justify-between px-4 py-4">
                <div className="flex flex-col gap-12">
                  <div className="">
                    <p className="flex items-center gap-1">
                      {" "}
                      Classic <CheckCircleIcon className="    text-green-500" />
                    </p>
                    <p>Room size: 120 sqft</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={hotel.facilities[0].img}
                        height={200}
                        width={200}
                        className="w-6"
                      />
                      <p>{hotel.facilities[0].name}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={hotel.facilities[1].img}
                        height={200}
                        width={200}
                        className="w-6"
                      />
                      <p>{hotel.facilities[1].name}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Image src={hotel.banner} height={200} width={200} />
                </div>
              </div>
            </div>

            <div className="border flex items-center justify-between px-5 py-2">
              <div className="">
                <div>
                  {" "}
                  <span className="text-2xl font-bold">
                    ₹{hotel.price}
                  </span>{" "}
                  <del>₹4017</del>
                </div>
                <p>+ ₹169 taxes & fee</p>
              </div>

              <div className="border flex items-center ">
                <CheckCircleIcon className="    text-green-500" />
                <button className="px-10 py-2">SELECTED</button>
              </div>
            </div>
          </div>

          <div className="col-span-4  border px-4 py-4">
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-bold">₹{hotel.price}</h1>{" "}
                <del>₹4017</del> <span className="text-[orange]">76% off</span>
              </div>

              <span className="text-sm">+ taxes & fees: ₹169</span>
            </div>

            <div className="flex">
              <div className="">
                <DateRangePicker
                className="custom-date-range"
                       moveRangeOnFirstSelection={false}
                       editableDateInputs={true}
                       dayContentRenderer={null}

                       ranges={[selectionRange]}
                       onChange={dataHandler}
                />
              </div>

             
  <div>

    

              
      
              </div>
            </div>

            <div className="border min-h-10 flex items-center justify-between px-5 shadow-sm py-3 ">
              <div className="flex gap-2 items-center">
                <Image src={'/classic.svg' } height={200} width={200} alt="classic" className="w-5 h-5"/>
                <p>Classic</p>
              </div>

              <div>
                 <Image src={"/pencil.svg"} height={200} width={200} className="w-3 cursor-pointer h-5"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='w-7/12 mx-auto'>
      
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
    </div> */}
    </>
  );
};
export async function getServerSideProps(ctx) {
  let res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.params.id}`);

  res = await res.json();

  return {
    props: {
      hotel: res.hotel,
    },
  };
}
export default SingleHotel;
