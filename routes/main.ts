import { Router } from "express";
import {
  main,
  fetchFilteredUser,
  fetchUsers,
  fetchFollowed,
  fetchFollowers,
  fetchComments,
  fetchCommentResponses,
} from "../controllers/main";

const mainRouter = Router();
mainRouter.get("/:id", fetchFilteredUser);
mainRouter.get("/:id/followed", fetchFollowed);
mainRouter.get("/:id/followers", fetchFollowers);
mainRouter.get("/:id/comments", fetchComments);
mainRouter.get(
  "/:thoughtId/comments/:commentId/responses",
  fetchCommentResponses
);
mainRouter.get("/", fetchUsers);

export default mainRouter;
