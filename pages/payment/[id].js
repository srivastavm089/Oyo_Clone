import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

const Payment = () => {
  const d = useParams();
 const router = useRouter();

  const makePayment = async () => {
    const { data } = await axios.post(
      `http://localhost:3000/api/razorpay`,
      { id: d?.id },
      { headers: { "Content-Type": "application/json" } }
    );

    const options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      name: "abhay",
      currency: data?.currency,
      amount: +data?.amount,
      order_id: data?.id,
      description: "Thank you for order",
      handler: function (res) {
        router.push("/success")
   console.log(res);
   console.log("payment successfull")
  
      },
      prefill: {
        name: "abhay",
        email: "abhay@gmail.com",
        contact: 987654321,
      },
    };
    const paymentObj = new window.Razorpay(options);
     paymentObj.open()
    

  };
  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;
