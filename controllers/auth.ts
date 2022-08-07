import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel, signUpValidation, loginValidation } from "../models/User";
import { IUser } from "../services/interfaces";

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
    console.log(req.body);
    const { error } = signUpValidation(req.body);
    if (error) {
      console.log(error.message);
      return res.status(404).send(error.message);
    }
    if (password !== repeatedPassword) {
      return res.status(404).send("Passwords aren't the same");
    }
    const user: IUser = await UserModel.findOne({ eMail: email });
    console.log(user);
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
  try {
    console.log(req.body);
    const { error } = loginValidation(req.body);
    if (error) {
      console.log(error.message);
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
    res
      .status(202)
      .cookie("token", cookieToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3,
      })
      .send({
        message: "You're logged",
        userData: user,
      });
  } catch (err) {
    console.error(`${err.message}`);
  }
};

export const googleLogin = async (req: Request, res: Response) => {
  const { clientId, credential } = req.body;
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
      res
        .status(202)
        .cookie("token", cookieToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 3,
        })
        .send({
          message: "You're logged",
          userData: appUser,
        });
    }
  } else {
    res.status(404).send("User with email is not found");
  }
};
