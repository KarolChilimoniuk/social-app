import {
  getUsers,
  register,
  nativeLogin,
  googleLogin,
  tokenChecking,
  logout,
} from "../controllers/auth";
import { Router } from "express";

const authRouter = Router();

authRouter.get("/", getUsers);
authRouter.get("/tokenChecking", tokenChecking, nativeLogin);
authRouter.get("/logout", logout);
authRouter.post("/signUp", register);
authRouter.post("/login", nativeLogin);
authRouter.post("/login/google", googleLogin);

export default authRouter;
