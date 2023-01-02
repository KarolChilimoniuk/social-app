import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import bcrypt from "bcrypt";
import { ThoughtModel } from "../models/Thought";
import { UserModel, signUpValidation, loginValidation } from "../models/User";
import { IUser, IDecodedUserData, IThought } from "../services/interfaces";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: Array<IUser> = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const register = async (req: Request, res: Response) => {
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
    console.error(`${err.message}`);
  }
};

export const nativeLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let listOfThoughts: Array<IThought> | Array<string>;
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(404).send(error.message);
    }
    const user: IUser = await UserModel.findOne({ eMail: email });
    if (!user) {
      res.status(404).send("User with email is not found");
    }
    const validatedPassword: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!validatedPassword) {
      res.status(401).send("Wrong password");
    }
    const cookieToken: string = await user.genAuthToken(
      user._id,
      user.eMail,
      user.password
    );
    if (user.posts.length > 0) {
      listOfThoughts = await Promise.all(
        user.posts.map(async (id) => {
          try {
            return await ThoughtModel.findOne({ _id: id }).exec();
          } catch (err) {
            console.log(err.message);
          }
        })
      );
    }
    if (user.posts.length === 0) {
      listOfThoughts = user.posts;
    }
    console.log(user._id);
    res
      .status(202)
      .cookie("token", cookieToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3,
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
          chats: user.chats,
          posts: listOfThoughts,
          friendsList: user.friendsList,
          groups: user.groups,
        },
      });
  } catch (err) {
    console.error(`${err.message}`);
  }
};

export const googleLogin = async (req: Request, res: Response) => {
  const { credential } = req.body;
  let listOfThoughts: Array<IThought> | Array<string>;
  if (credential) {
    const googleUserInfo: any = jwt.decode(credential);
    const appUser: IUser = await UserModel.findOne({
      eMail: googleUserInfo.email,
    });
    if (!appUser) {
      res.status(404).send("User with email is not found");
    } else {
      const cookieToken: string = await appUser.genAuthToken(
        appUser._id,
        appUser.eMail,
        appUser.password
      );
      if (appUser.posts.length > 0) {
        listOfThoughts = await Promise.all(
          appUser.posts.map(async (el) => {
            try {
              return await ThoughtModel.findOne({ _id: el }).exec();
            } catch (err) {
              console.log(err.message);
            }
          })
        );
      }
      if (appUser.posts.length === 0) {
        listOfThoughts = appUser.posts;
      }
      res
        .status(202)
        .cookie("token", cookieToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 3,
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
            chats: appUser.chats,
            posts: listOfThoughts,
            friendsList: appUser.friendsList,
            groups: appUser.groups,
          },
        });
    }
  } else {
    res.status(404).send("User with email is not found");
  }
};

export const tokenChecking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  let listOfThoughts: Array<IThought> | Array<string>;
  if (!token) {
    res.status(200).send("token does not exist");
  } else {
    const data: IDecodedUserData = await jwt_decode(token);
    const user: IUser = await UserModel.findOne({ eMail: data.email });
    if (user.posts.length > 0) {
      listOfThoughts = await Promise.all(
        user.posts.map(async (id) => {
          try {
            return await ThoughtModel.findOne({ _id: id }).exec();
          } catch (err) {
            console.log(err.message);
          }
        })
      );
    }
    if (user.posts.length === 0) {
      listOfThoughts = user.posts;
    }
    res.status(200).send({
      message: "Token exists",
      userData: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        eMail: user.eMail,
        birthDate: user.birthDate,
        registerDate: user.registerDate,
        pic: user.pic,
        chats: user.chats,
        posts: listOfThoughts,
        friendsList: user.friendsList,
        groups: user.groups,
      },
    });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).send("Cookie cleared");
};
