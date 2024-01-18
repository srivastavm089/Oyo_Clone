import connectDb from "@/db";
import hotel from "@/models/hotelModel";
export default async function handler(req, res){
  connectDb()
  // if(req.method==="POST"){
 
  //   const newHotel = new hotelModel(req.body);
  //   const result = await newHotel.save();
  //   res.status(201).json({
  //       success:true,
  //       msg:'Hotel added successfully'
  //   })


  // }

  if(req.method==="GET"){
  
    const hotels = await hotel.find({location:req.query.city})
    console.log(hotels)
    const allHotels = await hotel.find({})
    if(hotels.length < 1){
      return res.status(404).json({
        success:false,
       hotels:allHotels
      })
    }
    res.status(201).json({
      success:true, 
       hotels
    })
  }
}