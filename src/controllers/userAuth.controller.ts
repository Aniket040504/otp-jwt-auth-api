import { Request,Response } from "express";
import {signupUser,loginUser,sendOtpservice,verifyOtpservice} from '../services/userAuth.service';

// @desc Register User
// @route POST /api/signup
// @access Public

export const userSignup=async (req:Request, res:Response):Promise<any> => {
    try{
        const {name,phone,email,password,confirmpassword}=req.body;

        if (!name || !phone || !email || !password || !confirmpassword) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const user=await signupUser(name,email,password,confirmpassword);

        await sendOtpservice(phone);

        return res.status(201).json({
            user,
            msg:"acc created successfully, OTP sent for verification",
        });
    }
    catch(err:any){
        console.log(err);
      return res.status(500).json({msg:err.message || 'Signup failed'});
    }
}

// @desc Login User
// @route POST /api/login
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


// @desc Verify OTP
// @route POST /api/verifyOtp
// @access Public


export const verifyOtp=async (req:Request,res:Response):Promise<any> => {
    try{
        const {phone,otp}=req.body;
        
        if(!phone || !otp){
            res.status(404).json({msg:"Phone and Otp are required"});
        }

       const isVerified=await verifyOtpservice(phone,otp);
           
        if(isVerified){

         return res.status(200).json({ msg: "OTP verified" });

        } else {

          return res.status(400).json({ msg: "Verification failed" });
        }

    }
    catch(err:any){
        console.log(err);
        if(err.message=== "OTP Expired or not found"){
            return res.status(404).json({msg:err.message});
        }
        return res.status(500).json({msg:err.message || 'Login failed'});
    }
}




