import { Router } from "express";
import { main } from "../controllers/main";

const mainRouter = Router();
mainRouter.get("/", main);

export default mainRouter;
