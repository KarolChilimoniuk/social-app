import { Response, Request } from "express";
import { UserModel } from "../models/User";
import { IUser } from "services/interfaces";

export const main = (req: Request, res: Response) => {
  res.send("Server works ;]");
};
