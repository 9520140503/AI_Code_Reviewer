import { Router } from "express";
import {z} from "zod"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js";
import authenticate from "../middleware/authMiddleware.js";

const userRouter = Router();

const zodSchema = z.object({
    fullname:z.string(),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

userRouter.post('/signup',async(req,res) => {
    const {fullname,email,password} = req.body
    const validate = zodSchema.safeParse(req.body);

    if(!validate.success){
        return res.status(400).json({
            message:`Please fill valid credentials`,
            error:validate.error.flatten().fieldErrors});
    }

    try {
        const hashPassword = await bcrypt.hash(password,10);
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:"User all ready exists"});
        }
        await User.create({
            fullname,email,password:hashPassword
        })
        return res.status(200).json({message:"User signed up successyfully"})
    } catch (error) {
        console.log("Signup Error ",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
});

userRouter.post('/login',async(req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(400).json({message:"Not a valid user"});
        }

        const comparePassword = await bcrypt.compare(password,user.password);

        if(!comparePassword){
              return res.status(400).json({message:"Password doesn't match"});
        }

        const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{
            expiresIn:"2h"
        })

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"None",
            maxAge:12 *60 *60 * 1000
        })

        return res.status(200).json({message:"Login Successfully",token})
    } catch (error) {
        console.log("Signup Error e",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
});

userRouter.put('/updateProfile',authenticate,async(req,res) => {
    const user = req.user;
    const {image, fullname, email, password} = req.body
    try {
         const updateFields = { image, fullname, email };

        if(password && password.trim() !== ''){
            const hashPassword = await bcrypt.hash(password,10);
            updateFields.password = hashPassword
        }
         await User.findByIdAndUpdate(user._id,updateFields,{new:true});
        
        res.json("User Info Have Been Updated");

    } catch (error) {
          console.log("Update Error ",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
});

userRouter.get('/profile',authenticate, async(req,res) => {
    const user = req.user;
     if(!user){
       return res.status(404).json("User is invalid");
    }

    const {image,fullname,email,mobile} = user;

    res.json({
        image,
        fullname,
        email,
        mobile
    })
});

userRouter.get('/logout',async(req,res) => {
        const user = req.user;
        if(!user){
            return res.status(404).json("User is invalid");
        }
        res.clearCookie("token",{
            httpOnly:true,
            secure:true,
            sameSite:"None"
        });
         res.status(200).json({ message: "Logged out successfully" });
});

export default userRouter;

