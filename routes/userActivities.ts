import { editUserData, editUserPic } from "../controllers/userActivities";
import { Router } from "express";

const userActivitiesRouter = Router();

userActivitiesRouter.post("/editProfile", editUserData);
userActivitiesRouter.post("/editUserPic", editUserPic);

export default userActivitiesRouter;
