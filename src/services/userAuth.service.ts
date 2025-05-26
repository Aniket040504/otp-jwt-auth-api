import bcrypt from 'bcryptjs';
import { findUserByEmail, createUser } from "../repositories/userAuth.repository";
import { genToken } from "../utils/jwt";

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
