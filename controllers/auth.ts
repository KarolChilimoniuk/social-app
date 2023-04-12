import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import bcrypt from "bcrypt";
import { UserModel, signUpValidation, loginValidation } from "../models/User";
import {
  getUserFollowed,
  getUserFollowers,
  getUserPosts,
  getPostsToShow,
} from "../userMethods";
import { IUser, IDecodedUserData, IThoughtInPushMethod } from "../interfaces";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: Array<IUser> = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// Sign up

export const register = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const {
    userName,
    firstName,
    lastName,
    birthDate,
    email,
    password,
    repeatedPassword,
  } = req.body;
  try {
    const { error } = signUpValidation(req.body);
    if (error) {
      return res.status(404).send(error.message);
    }
    if (password !== repeatedPassword) {
      return res.status(404).send("Passwords aren't the same");
    }
    const user: IUser = await UserModel.findOne({ eMail: email });
    if (user) {
      return res
        .status(409)
        .send("User using this email exists - choose other email");
    }
    const hashedPassword: string = await bcrypt.hash(password, 10);
    await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      userName: userName,
      password: hashedPassword,
      eMail: email,
    });
    res.status(201).send("User registered");
  } catch (err) {
    res.json(err.message);
  }
};

// Native log in (no Google)

export const nativeLogin = async (
  req: any,
  res: Response
): Promise<Response | void> => {
  try {
    let email: string;
    let password: string;
    let user: IUser;
    if (req.tokenData) {
      email = req.tokenData.email;
      password = req.tokenData.password;
      user = await UserModel.findOne({ eMail: email });
    } else {
      email = req.body.email;
      password = req.body.password;
      const { error } = loginValidation(req.body);
      if (error) {
        return res.status(404).send(error.message);
      }
      user = await UserModel.findOne({ eMail: email });
      if (!user) {
        return res.status(404).send("User with this email is not found");
      }
      if (!req.decodedData) {
        const validatedPassword: boolean = await bcrypt.compare(
          password,
          user.password
        );
        if (!validatedPassword) {
          return res.status(401).send("Wrong password");
        }
      }
    }
    const cookieToken: string = await user.genAuthToken(
      user._id,
      user.eMail,
      user.password
    );
    const listOfFollowed: Array<IUser> = await getUserFollowed(user);
    const listOfFollowers: Array<IUser> = await getUserFollowers(user);
    const userPosts: Array<IThoughtInPushMethod> = await getUserPosts(user);
    const thoughtsToShow: Array<IThoughtInPushMethod> = await getPostsToShow(
      listOfFollowed,
      user
    );
    res
      .status(202)
      .cookie("token", cookieToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 4,
        secure: true,
        sameSite: "none",
      })
      .send({
        message: "You're logged",
        userData: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          eMail: user.eMail,
          birthDate: user.birthDate,
          registerDate: user.registerDate,
          pic: user.pic,
          description: user.description,
          chats: user.chats,
          allPostsToShow: thoughtsToShow,
          userPosts: userPosts,
          followed: listOfFollowed,
          followers: listOfFollowers,
          groups: user.groups,
        },
      });
  } catch (err) {
    res.json(err.message);
  }
};

// Log in via Google

export const googleLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { credential } = req.body;
  if (credential) {
    const googleUserInfo: any = jwt.decode(credential);
    const appUser: IUser = await UserModel.findOne({
      eMail: googleUserInfo.email,
    });
    if (!appUser) {
      res.status(404).send("User with this email is not found");
    } else {
      const cookieToken: string = await appUser.genAuthToken(
        appUser._id,
        appUser.eMail,
        appUser.password
      );
      const listOfFollowed: Array<IUser> = await getUserFollowed(appUser);
      const listOfFollowers: Array<IUser> = await getUserFollowers(appUser);
      const userPosts: Array<IThoughtInPushMethod> = await getUserPosts(
        appUser
      );
      const thoughtsToShow: Array<IThoughtInPushMethod> = await getPostsToShow(
        listOfFollowed,
        appUser
      );
      res
        .status(202)
        .cookie("token", cookieToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 4,
          secure: true,
          sameSite: "none",
        })
        .send({
          message: "You're logged",
          userData: {
            _id: appUser._id,
            firstName: appUser.firstName,
            lastName: appUser.lastName,
            userName: appUser.userName,
            eMail: appUser.eMail,
            birthDate: appUser.birthDate,
            registerDate: appUser.registerDate,
            pic: appUser.pic,
            description: appUser.description,
            chats: appUser.chats,
            allPostsToShow: thoughtsToShow,
            userPosts: userPosts,
            followed: listOfFollowed,
            followers: listOfFollowers,
            groups: appUser.groups,
          },
        });
    }
  } else {
    res.status(404).send("User with email is not found");
  }
};

// Token validator

export const tokenChecking = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).send("token does not exist");
  } else {
    const data: IDecodedUserData = await jwt_decode(token);
    req.tokenData = data;
    next();
  }
};

// Log out

export const logout = (req: Request, res: Response): void => {
  res.clearCookie("token");
  res.status(200).send("Cookie cleared");
};
