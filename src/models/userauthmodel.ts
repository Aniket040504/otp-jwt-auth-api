import mongoose, {Document,Schema} from "mongoose";
import {IUser} from '../interfaces/IUser';


const userSchema: Schema =new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
},
{timestamps:true,
}
)

export const userDetails=mongoose.model<IUser>('user',userSchema);



