import { Router } from "express";
import { main, fetchFilteredUser } from "../controllers/main";

const mainRouter = Router();
mainRouter.get("/", main);
mainRouter.get("/:id", fetchFilteredUser);

export default mainRouter;
