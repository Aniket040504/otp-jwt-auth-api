import {client} from "../utils/twilioClient";
import {findOtpandUpdate,findOtpbyphone,findOtpbyphoneandDelete} from "../repositories/otpAuth.repository"
import { error } from "console";

export const sendOtpservice=async (phone:string) :Promise<any> => {
    if(!phone){
        throw new Error("Enter Valid Phone Number");
    }

     //Generate OTP

     const otp=Math.floor(100000 + Math.random() * 900000).toString();

     await findOtpandUpdate(phone,otp);

       // Send OTP via Twilio SMS

       await client.messages.create({
        body:`Your verification code is ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone
    });
}

export const verifyOtpservice=async (phone:string,otp:string): Promise<any> => {

    const record=await findOtpbyphone(phone);
    if(!record){
        throw new Error("OTP expired or not found");
    }

    if(record.otp === otp){

       await findOtpbyphoneandDelete(phone);
       return true;
    }
    else{
        return false;
    }
}