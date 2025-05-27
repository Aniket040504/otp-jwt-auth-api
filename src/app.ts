import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userAuth from "./routes/userAuth.Routes";
import path from "path";

const initApp = () => {
  try {
    dotenv.config();
    const app = express();
    
    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    // Routes
    app.use("/api", userAuth);
  

    return app;
  } catch (err) {
    console.log("App initialization error:", err);
    throw err;
  }
};

export default initApp;
