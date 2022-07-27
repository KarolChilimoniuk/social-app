import { Response, Request } from "express";

export const main = (req: Request, res: Response) => {
  res.send("Server works ;]");
};
