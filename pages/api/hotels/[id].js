import connectDb from "@/db";
import hotel from "@/models/hotelModel";
export default async function handler(req, res){
if(req.method==="GET"){
    connectDb();
    if(req.query.id){
        const hotels = await hotel.findById(req.query.id);
        res.status(200).json({
            hotel:hotels
        })
    }
}
}