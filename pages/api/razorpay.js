import connectDb from "@/db";
import Razorpay from "razorpay";
import hotel from "@/models/hotelModel";
import shortid from "shortid";
export default async function handler(req, res){
   console.log("workign")
    if(req.method==="POST"){
        connectDb()
        const razorpay = new Razorpay({
            key_id:process.env.KEY_ID ,
            key_secret:process.env.KEY_SECRET

        })
       const {price} = await hotel.findById(req.body.id);
      
       
        const options={
            amount:(price*100).toString(),
            currency:"INR",
            receipt:shortid.generate(),
            payment_capture:1


        }

        try {
            const result = await razorpay.orders.create(options);
          
            res.status(201).json({
                id:result.id,
                currency:result.currency,
                amount:result.amount
            })
        } catch (error) {
            console.log(error)
        }
    }
}