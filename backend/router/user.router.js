import { Router } from "express";
import { SignUp, SignIn, SignOut } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.post("/sign-up", SignUp);
userRouter.post("/sign-in", SignIn);
userRouter.get("/sign-out", SignOut);

export { userRouter };
