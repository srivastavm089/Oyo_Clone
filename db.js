import mongoose from "mongoose";


const URI = process.env.MONGO_URI

const connectDb = async()=>{
    await mongoose.connect(URI).then((item)=>{
        console.log("databas connected")
    })
}
export default connectDb