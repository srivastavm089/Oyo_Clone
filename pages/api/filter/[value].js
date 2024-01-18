import hotel from "@/models/hotelModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { value } = req.query;
    // let regexPattern = new RegExp(`^(.*?(\\b${value}\\b)[^$]*)$`)

    const hotels = await hotel.find({ name: { $regex: `${value}` } });

    res.status(200).json({ msg: "ok", hotels });
  }
}
