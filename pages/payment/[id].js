import axios from "axios";
import { useParams } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";

const Payment = () => {
  const d = useParams();

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
      handler: function (res) {},
      prefill: {
        name: "abhay",
        email: "abhay@gmail.com",
        contact: 987654321,
      },
    };
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
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
