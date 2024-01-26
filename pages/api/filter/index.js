import hotel from "@/models/hotelModel";

export default async function handler(req, res) {
  if (req.method == "GET") {
    let initial = req.query.price;

    initial = initial.split(",");

    let data = await hotel.find({
      price: { $gte: +initial[0], $lte: +initial[1] },
    });

    if (req.query.col) {
      console.log("exist")
      let temp = [];
      let flag = false;
      let col = JSON.parse(req.query.col);
 
      for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < col.length; i++) {
          if (!data[j].collections.includes(col[i])) {
            
            flag = true;
            break;
          }
        }
        if (!flag) {
          temp.push(data[j]);
        } else {
          flag = false;
        }
      }

      // used spread bcz array is not primitive refrance data type
      if(temp.length!==0){
        data = [...temp];
      }
     

      // data = data.filter((item) => item.collections.includes(req.query.col));
    }

    res.status(200).json({
      hotel: data,
    });
  }
}
