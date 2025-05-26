import { userDetails } from "../models/userauthmodel";

export const findUserByEmail = async (email: string) => {
    try{
    return await userDetails.findOne({ email });
}
    catch(err){
        console.log(err);
        throw err;
    }
};

export const createUser = async (name: string, email: string, password: string) => {
    try{
    return await userDetails.create({ name, email, password });
    }
    catch(err){
        console.log(err);
        throw err;
    } 
};
