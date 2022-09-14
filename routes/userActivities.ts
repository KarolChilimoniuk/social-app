import { editUserData } from "../controllers/userActivities";
import { Router } from "express";

const userActivitiesRouter = Router();

userActivitiesRouter.post("/editProfile", editUserData);

export default userActivitiesRouter;
