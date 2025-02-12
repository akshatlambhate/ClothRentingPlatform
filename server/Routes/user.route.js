import { Router } from "express";
import { SignUpUser,LoginUser } from "../Controllers/user.controller.js";

const router =Router();
router.post('/sign-up',SignUpUser)
router.post('/login',LoginUser)



export default router