import mongoose, {Document,Schema} from "mongoose";
import {IOtp} from '../interfaces/IOtp';

const otpSchema:Schema=new mongoose.Schema<IOtp>({
    phone:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires: 300,
    }
})

export const otpModel=mongoose.model<IOtp>("otp",otpSchema);


