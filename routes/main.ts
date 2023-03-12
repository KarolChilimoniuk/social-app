import { Router } from "express";
import {
  main,
  fetchFilteredUser,
  fetchUsers,
  fetchFollowed,
  fetchFollowers,
} from "../controllers/main";

const mainRouter = Router();
mainRouter.get("/:id", fetchFilteredUser);
mainRouter.get("/:id/followed", fetchFollowed);
mainRouter.get("/:id/followers", fetchFollowers);
mainRouter.get("/", fetchUsers);

export default mainRouter;
