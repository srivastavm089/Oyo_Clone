import connectDb from "@/db";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDb();
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "all field are required",
      });
    }

    const emailExist = await User.findOne({ email });
    if (!emailExist) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered",
      });
    }
    const passwordMatched = await bcrypt.compare(password, emailExist.password);
    if (!passwordMatched) {
      return res.status(401).json({
        success: false,
        message: "invalid password or email",
      });
    }

    const token = jwt.sign({ token: emailExist._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
        success:true,
        message:"Logged in successfully !",
        token
    })
  }
}
