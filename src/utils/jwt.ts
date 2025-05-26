import jwt from "jsonwebtoken";

export const genToken=(email:string)=>{
    { if(!process.env.JWT_SECRETKEY)
        throw new Error("JWT_SECRETKEY is not defined in .env");
    }
        return jwt.sign({
            email
        },
        process.env.JWT_SECRETKEY,
        {
            expiresIn:'30d',
        }
    )}