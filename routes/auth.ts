import { getUsers, register, login } from "../controllers/auth";
import { Router } from "express";

const authRouter = Router();

authRouter.get("/", getUsers);
authRouter.post("/signUp", register);
authRouter.post("/login", login);

export default authRouter;
