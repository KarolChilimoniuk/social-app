import { Router } from "express";
import { main, fetchFilteredUser, fetchUsers } from "../controllers/main";

const mainRouter = Router();
mainRouter.get("/:id", fetchFilteredUser);
mainRouter.get("/", fetchUsers);

export default mainRouter;
