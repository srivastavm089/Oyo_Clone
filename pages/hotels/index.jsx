import React, { use, useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import Header1 from "../components/Header1";
import RangeSlider from "../components/Slider";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  getHotelPrice,
  searchHotel,
  collectionFilter,
} from "@/redux/actions/hotelAction";
const Hotels = ({ hotels }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([499, 20000]);

  const [multipleCol, setMultipleCol] = useState([]);
  const { loading, error, hotels: data } = useSelector((state) => state.hotel);

  const router = useRouter();

  //   setLoader(true);
  //   let { data } = await axios.get(
  //     `http://localhost:3000/api/filter?price=${value}`
  //   );

  //   setList(data.hotel);

  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1000);
  // };

  const collectionHandle = async (e) => {
    if (e.target.checked) {
      if (!multipleCol.includes(e.target.value)) {
        setMultipleCol([...multipleCol, e.target.value]);
      }
      //api calles
      dispatch(collectionFilter(multipleCol));

      // dispatch()
      // let { data } = await axios.get(
      //   `http://localhost:3000/api/filter?price=${value}&col=[${multipleCol}]`
      // );
    } else {
      let idx = multipleCol.indexOf(e.target.value);
      let remove = [...multipleCol];
      remove.splice(idx, 1);

      setMultipleCol(remove);
    }
  };
  console.log(multipleCol);
  const [user, setUser] = useState("");
  useEffect(() => {
    const check = Cookies.get("user");
    setUser(check);
  }, []);

  const searchHandler = async (e) => {
    dispatch(searchHotel(e.target.value));
  };

  useEffect(() => {
    // priceFetch();
    dispatch(getHotelPrice(value));
  }, [dispatch, value, error]);
  console.log(value);
  return (
    <div className=" m-5 ">
      <Header1 />

      <div className="grid grid-cols-12  relative">
        <div
          className="col-span-3 h-screen border-r flex flex-col   pt-5  gap-4 overflow-y-scroll fixed "
          id="first-scroll"
        >
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
              <input
                type="checkbox"
                value="family"
                onChange={(e) => collectionHandle(e)}
              />
              <span className="">Family OYO's</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="group"
                onChange={(e) => collectionHandle(e)}
              />
              <span>For Group Travellers</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="localId"
                onChange={(e) => collectionHandle(e)}
              />
              <span>Local IDs accepted</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="welcomeCouple"
                onChange={(e) => collectionHandle(e)}
              />
              <span>OYOs welcome couples</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="business"
                onChange={(e) => collectionHandle(e)}
              />
              <span>Busniess travellers</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="recommended"
                onChange={(e) => collectionHandle(e)}
              />
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
            loading ? "left-[52vw] top-[50vh] w-56 py-4  " : "right-2"
          }`}
        >
          {loading ? (
            <Loader />
          ) : (
            <div>
              {!user && (
                <div className="bg-red-500 flex mx-5 text-white justify-between items-center px-10 py-4">
                  <Image
                    src={"/login.svg"}
                    width={200}
                    height={200}
                    alt="logo"
                  />
                  <div className="flex justify-center flex-col items-center">
                    <h1 className="text-2xl">
                      Login now to get upto 15% lower prices
                    </h1>
                    <p className="text-lg">
                      Enjoy up to 15% extra discount on your bookings
                    </p>
                  </div>
                  <div>
                    <button
                      className="bg-white  text-red-600 cursor-pointer py-2 px-12 "
                      onClick={() => router.push("/login")}
                    >
                      Login
                    </button>
                  </div>
                </div>
              )}
              {data.length !== 0
                ? data &&
                  data.map((item, index) => {
                    return <HotelCard data={item} key={item._id} />;
                  })
                : hotels &&
                  hotels.map((item, index) => {
                    return <HotelCard data={item} key={item._id} />;
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
