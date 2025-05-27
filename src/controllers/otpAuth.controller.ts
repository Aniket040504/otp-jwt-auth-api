import {Request,Response} from "express";
import {client} from "../utils/twilioClient";
import {sendOtpservice,verifyOtpservice} from "../services/otpAuth.service"

export const sendOtp=async (req:Request,res:Response):Promise<any> => {
    try{
        const {phone}=req.body;
        if(!phone){
           return res.status(404).json({msg:"Phone number is required"});
        }

        //Generate OTP

      await sendOtpservice(phone);

        return res.status(200).json({ msg: "OTP sent successfully" });
    }   
    catch(err:any){
    console.log(err);
     return res.status(500).json({msg:err.message || 'Failed to send otp'});
    } 
}

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



