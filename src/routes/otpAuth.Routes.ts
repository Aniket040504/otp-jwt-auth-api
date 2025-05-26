import express from "express";
import {sendOtp} from '../controllers/otpAuth.controller';

const router=express.Router();

router.post("/sendotp",sendOtp);

export default router;
