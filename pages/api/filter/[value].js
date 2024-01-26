import hotel from "@/models/hotelModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { value } = req.query;

    const hotels = await hotel.find({ name: { $regex: `${value}` } });
    console.log(hotels)
    res.status(200).json({ msg: "ok", hotels });
  }
}
