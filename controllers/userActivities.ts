import { Request, Response } from "express";

export const editUserData = async (req: Request, res: Response) => {
  res.status(200).send("works");
};
