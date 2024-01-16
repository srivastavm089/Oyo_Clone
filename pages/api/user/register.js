import connectDb from "@/db";
import User from "@/models/userModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export default async function handler(req, res) {
    if(req.method ==="POST"){
     
        connectDb();
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All Field are Mandatory"})
        }
        const emailExist = await User.findOne({email});
        if(emailExist){
            return res.status(400).json({
                success:false,
                message:"User already Registered"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await new User({
            name,
            email,
           password:hashPassword
        })
         const result = await newUser.save();
         const token = jwt.sign({token:result._id},process.env.JWT_SECRET, {expiresIn:'30d'})

         return res.status(201).json({
            success:true,
            message:"Registered successfully !",
            token
         })
        


    }
  }