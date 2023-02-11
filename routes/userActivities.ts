import {
  editUserData,
  editUserPic,
  addThought,
  addLike,
  removeLike,
} from "../controllers/userActivities";
import { Router } from "express";

const userActivitiesRouter = Router();

userActivitiesRouter.post("/editProfile", editUserData);
userActivitiesRouter.post("/editUserPic", editUserPic);
userActivitiesRouter.post("/newThought", addThought);
userActivitiesRouter.patch("/addLike", addLike);
userActivitiesRouter.patch("/removeLike", removeLike);

export default userActivitiesRouter;
