import express from "express";
import {userSignup,userlogin,verifyOtp} from '../controllers/userAuth.controller';


const router=express.Router();

router.post("/signup",userSignup);
router.post("/login",userlogin);
router.post("/verifyotp",verifyOtp);

export default router;