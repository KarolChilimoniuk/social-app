import {
  getUsers,
  register,
  nativeLogin,
  googleLogin,
} from "../controllers/auth";
import { Router } from "express";

const authRouter = Router();

authRouter.get("/", getUsers);
authRouter.post("/signUp", register);
authRouter.post("/login", nativeLogin);
authRouter.post("/login/google", googleLogin);

export default authRouter;
