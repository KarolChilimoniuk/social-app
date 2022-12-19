import {
  editUserData,
  editUserPic,
  addThought,
} from "../controllers/userActivities";
import { Router } from "express";

const userActivitiesRouter = Router();

userActivitiesRouter.post("/editProfile", editUserData);
userActivitiesRouter.post("/editUserPic", editUserPic);
userActivitiesRouter.post("/newThought", addThought);

export default userActivitiesRouter;
