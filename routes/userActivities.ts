import {
  editUserData,
  editUserPic,
  addThought,
  addLike,
  removeLike,
  follow,
  unFollow,
  addComment,
} from "../controllers/userActivities";
import { Router } from "express";

const userActivitiesRouter = Router();

userActivitiesRouter.post("/editProfile", editUserData);
userActivitiesRouter.post("/editUserPic", editUserPic);
userActivitiesRouter.post("/newThought", addThought);
userActivitiesRouter.post("/newComment", addComment);
userActivitiesRouter.patch("/addLike", addLike);
userActivitiesRouter.patch("/removeLike", removeLike);
userActivitiesRouter.patch("/follow", follow);
userActivitiesRouter.patch("/unfollow", unFollow);

export default userActivitiesRouter;
