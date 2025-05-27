import bcrypt from 'bcryptjs';
import {client} from "../utils/twilioClient";
import { genToken } from "../utils/jwt";
import { findUserByEmail, createUser } from "../repositories/userAuth.repository";
import {findOtpandUpdate,findOtpbyphone,findOtpbyphoneandDelete} from "../repositories/userAuth.repository"


export const signupUser = async (name: string, email: string, password: string, confirmpassword:string) => {
    if(!name || !email || !password || !confirmpassword){
       throw new Error("All fields are required");
    }
    if (password!=confirmpassword){
        throw new Error("Passwords do not match");
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await createUser(name, email, hashedPassword);
    return {
        name: newUser.name,
        email: newUser.email
    }
}


export const loginUser = async (email: string, password: string) => {
    const user = await findUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = genToken(user.email);
        return {
            name: user.name,
            email: user.email,
            token
        };
    } else {
        throw new Error('Invalid credentials');
    }
}

//OTP

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