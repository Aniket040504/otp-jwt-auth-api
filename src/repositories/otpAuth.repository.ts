import {otpModel} from "../models/otpAuth.model"

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