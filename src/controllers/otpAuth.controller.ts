import {Request,Response} from "express";
import {client} from "../utils/twilioClient";
import {otpModel} from "../models/otpAuth.model"

export const sendOtp=async (req:Request,res:Response):Promise<any> => {
    try{
        const {phone}=req.body;
        if(!phone){
            res.status(404).json({msg:"Phone number is required"});
        }

        //Generate OTP

        const otp=Math.floor(100000 + Math.random() * 900000).toString();

        // Save or update OTP in DB 

        await otpModel.findOneAndUpdate(
            {phone},
            {otp, createdAt:new Date() },
            {upsert:true, new:true}
        );

        // Send OTP via Twilio SMS

        await client.messages.create({
            body:`Your verification code is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone
        });

        return res.status(200).json({ msg: "OTP sent successfully" });
    }   
    catch(err:any){
    console.log(err);
     return res.status(500).json({msg:err.message || 'Failed to send otp'});
    } 
}

// const verifyOtp=async (req:Request,res:Response):Promise<any> => {
//     try{

//     }
//     catch(err:any){
//         console.log(err);
//         return res.status(500).json({msg:err.message || 'Login failed'});
//     }
// }



