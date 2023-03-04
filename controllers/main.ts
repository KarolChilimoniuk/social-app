import { Response, Request } from "express";
import { UserModel } from "../models/User";
import {
  getUserFollowed,
  getUserFollowers,
  getUserPosts,
} from "../userMethods";
import { IUser, IThoughtInPushMethod } from "interfaces";

export const main = (req: Request, res: Response) => {
  res.send("Server works ;]");
};

export const fetchFilteredUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    !id && res.status(400).json("Bad request :(");
    const user: IUser = await UserModel.findById(id);
    !user && res.status(404).json("User not found :(");
    const listOfFollowed: Array<IUser> = await getUserFollowed(user);
    const listOfFollowers: Array<IUser> = await getUserFollowers(user);
    const userPosts: Array<IThoughtInPushMethod> = await getUserPosts(user);
    res.status(200).send({
      userData: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        eMail: user.eMail,
        birthDate: user.birthDate,
        registerDate: user.registerDate,
        pic: user.pic,
        userPosts: userPosts,
        // followed: listOfFollowed,
        // followers: listOfFollowers,
        followed: user.followed,
        followers: user.followers,
      },
    });
  } catch (err) {
    res.json(err.message);
  }
};

export const fetchUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).send({ users: users });
  } catch (err) {
    res.json(err.message);
  }
};
