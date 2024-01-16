import hotel from "@/models/hotelModel";

export default async function handler(req, res) {
  if (req.method == "GET") {
    let initial = req.query.price;
    initial = initial.split(",");
    const data = await hotel.find({
      price: { $gte: +initial[0], $lte: +initial[1] },
    });

    res.status(200).json({
      hotel: data,
    });
  }
}
