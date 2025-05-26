import { Request,Response } from "express";
import {signupUser,loginUser} from '../services/userAuth.service';

// @desc Register User
// @route POST /api/user/signup
// @access Public

export const userSignup=async (req:Request, res:Response):Promise<any> => {
    try{
        const {name,email,password,confirmpassword}=req.body;

        if (!name || !email || !password || !confirmpassword) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const user=await signupUser(name,email,password,confirmpassword);
        return res.status(201).json({
            user,
            msg:"acc created successfully"
        });
    }
    catch(err:any){
        console.log(err);
      return res.status(500).json({msg:err.message || 'Signup failed'});
    }
}

// @desc Login User
// @route POST /api/user/login
// @access Public

export const userlogin=async (req:Request,res:Response):Promise<any> => {
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(404).json({msg:"Email and password are required"})
        }
            const user=await loginUser(email,password);
            return res.status(201).json({
                user,
                msg:"acc logged in successfully"
            })
        }
    catch(err:any){
        console.log(err);
     return res.status(500).json({msg:err.message || 'Login failed'});
    }
}

