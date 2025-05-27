import { userDetails } from "../models/userauthmodel";

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
