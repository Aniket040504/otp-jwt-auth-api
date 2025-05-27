import { userDetails } from "../models/userauthmodel";
import {otpModel} from "../models/otpAuth.model"

export const findUserByEmail = async (email: string) :Promise<any> => {
    try{
    return await userDetails.findOne({ email });
}
    catch(err){
        console.log(err);
        throw err;
    }
};

export const createUser = async (name: string, email: string, password: string) :Promise<any> => {
    try{
    return await userDetails.create({ name, email, password });
    }
    catch(err){
        console.log(err);
        throw err;
    } 
};

//OTP


export const findOtpandUpdate= async (phone:string, otp:string) :Promise<any> => {
    try{
       return await otpModel.findOneAndUpdate(
            {phone},
            {otp, createdAt:new Date() },
            {upsert:true, new:true}
        );

    }
    catch(err){
        throw err;
    }
}

export const findOtpbyphone=async (phone:string):Promise<any> => {
    try{
        return await otpModel.findOne({phone });
    }
    catch(err){
        throw err;
    }
}

export const findOtpbyphoneandDelete=async (phone:string) :Promise<any> => {
    try{
        return  await otpModel.deleteOne({phone});
    }
    catch(err){
        throw err;
    }
}
