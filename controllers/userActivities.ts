import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User";

export const editUserData = async (req: Request, res: Response) => {
  const {
    currentMail,
    userName,
    firstName,
    lastName,
    password,
    repeatedPassword,
    birthDate,
    email,
    userPic,
  } = req.body;
  try {
    console.log(currentMail);
    const user = await UserModel.findOne({ eMail: currentMail });
    let hashedPassword: string = "";
    if (password !== "" && password !== repeatedPassword) {
      res.status(406).send("Passwords are not equal");
    } else {
      if (password !== "" && password === repeatedPassword) {
        hashedPassword = await bcrypt.hash(password, 10);
      }
      user.userName =
        userName !== user.userName && userName !== ""
          ? userName
          : user.userName;
      user.firstName =
        firstName !== user.firstName && firstName !== ""
          ? firstName
          : user.firstName;
      user.lastName =
        lastName !== user.lastName && lastName !== ""
          ? lastName
          : user.lastName;
      user.password = hashedPassword !== "" ? hashedPassword : user.password;
      user.birthDate =
        birthDate !== user.birthDate && birthDate !== ""
          ? birthDate
          : user.birthDate;
      user.eMail = email !== user.eMail && email !== "" ? email : user.eMail;
      user.pic = userPic !== user.pic && userPic !== "" ? userPic : user.pic;
      user.save();
      console.log(user);
      const updatedUser = await UserModel.findOne({ eMail: user.eMail });
      res.status(201).send({ message: "Data Updated", userData: updatedUser });
    }
  } catch (err) {
    console.error(`${err.message}`);
  }
};
