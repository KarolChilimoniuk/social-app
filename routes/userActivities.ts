import {
  editUserData,
  editUserPic,
  addThought,
  likeThought,
  unlikeThought,
  likeComment,
  unlikeComment,
  likeCommentResponse,
  unlikeCommentResponse,
  follow,
  unFollow,
  addComment,
  addCommentResponse,
} from "../controllers/userActivities";
import { Router } from "express";

const userActivitiesRouter = Router();

userActivitiesRouter.post("/editProfile", editUserData);
userActivitiesRouter.post("/editUserPic", editUserPic);
userActivitiesRouter.post("/newThought", addThought);
userActivitiesRouter.post("/newComment", addComment);
userActivitiesRouter.post("/newCommentResponse", addCommentResponse);
userActivitiesRouter.patch("/likeThought", likeThought);
userActivitiesRouter.patch("/unlikeThought", unlikeThought);
userActivitiesRouter.patch("/likeComment", likeComment);
userActivitiesRouter.patch("/unlikeComment", unlikeComment);
userActivitiesRouter.patch("/likeCommentResponse", likeCommentResponse);
userActivitiesRouter.patch("/unlikeCommentResponse", unlikeCommentResponse);
userActivitiesRouter.patch("/follow", follow);
userActivitiesRouter.patch("/unfollow", unFollow);

export default userActivitiesRouter;
