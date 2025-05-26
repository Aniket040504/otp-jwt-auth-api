import mongoose from "mongoose";
import dotenv from 'dotenv';

const initDB = async () => {
  try {
     const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydb";
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed : ", error);
    process.exit(1);
  }
};

export default initDB;
