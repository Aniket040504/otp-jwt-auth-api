import express from "express";
import {userSignup,userlogin} from '../controllers/userAuth.controller';

const router=express.Router();

router.post("/signup",userSignup);
router.post("/login",userlogin);

export default router;