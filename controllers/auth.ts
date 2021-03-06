import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserModel, signUpValidation, loginValidation } from "../models/User";
import { idText, isJSDocUnknownTag } from "typescript";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
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
      res.status(404).send("Passwords aren't the same");
    }
    const user = await UserModel.findOne({ eMail: email });
    console.log(user);
    if (user) {
      return res
        .status(409)
        .send("User using this email exists - choose other email");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    console.log(req.body);
    const { error } = loginValidation(req.body);
    if (error) {
      console.log(error.message);
      return res.status(404).send(error.message);
    }
    const user = await UserModel.findOne({ eMail: email });
    if (!user) {
      res.status(404).send("User with email is not found");
    }
    const validatedPassword = await bcrypt.compare(password, user.password);
    if (!validatedPassword) {
      res.status(401).send("Wrong password");
    }
    const token = await user.genAuthToken(user._id, user.eMail);
    res.status(202).send({ message: "You're logged", userData: { user } });
  } catch (err) {
    console.error(`${err.message}`);
  }
};
