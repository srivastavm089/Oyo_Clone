import mongoose, { mongo } from "mongoose";
const hotelSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
ratings:{
    type:Number,

},
description:{
    type:String,
    required:true,
    trim:true,
},
banner:{
    type:String,
    required:true
},
gallery:[
    {
        type:String,

    }
],
price:{
    type:Number
},
collections:[
    {
        type:String,
        
    }
],

categories:{
 type:String
},
accomodation:{
  type:String
},
facilities:[
    {
        img:String,
        name:String,

    }
],
location:{
    type:String,
    required:true
}
}, {timestamps:true})

export default mongoose.models.hotel   || mongoose.model("hotel", hotelSchema)