import Image from "next/image";

const Header4 = () => {
  return <div className="flex mx-20 items-center  justify-between  border-gray-200 border-2 rounded-lg px-5 ">
      <div className="flex items-center">
      <Image src={"/fire.jpg"} width={200} height={200} className="w-20 h-20 mr-4" />

      <div>
        <p className="font-bold ">Get access to exclusive deals</p>
        <p>Only the best deals reach yout inbox</p>
      </div>
      </div>

      <div className="flex gap-2">
       <input type="text" placeholder="john@gmail.com" className="h-10 outline-none border pl-2 w-60" />
       <input type="button" value={"Notify"} className="bg-red-400  h-10 text-white w-20 p-2 rounded hover:bg-red-600 cursor-pointer rounded-xl" />

      </div>
  </div>;
};

export default Header4;
