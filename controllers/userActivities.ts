import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cloud from "../services/cloudinary";
import { UserModel } from "../models/User";
import { ThoughtModel } from "../models/Thought";

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
      await user.save();
      console.log(user);
      const updatedUser = await UserModel.findOne({ eMail: user.eMail });
      res.status(201).send({ message: "Data Updated", userData: updatedUser });
    }
  } catch (err) {
    console.error(`${err.message}`);
  }
};

export const editUserPic = async (req: Request, res: Response) => {
  const { userPic, email } = req.body;
  console.log(
    process.env.CLOUDINARY_NAME,
    process.env.CLOUDINARY_APIKEY,
    process.env.CLOUDINARY_SECRET
  );
  if (email) {
    try {
      if (userPic) {
        const user = await UserModel.findOne({ eMail: email });
        console.log(user.pic);
        const uploadedImage = await cloud.uploader.upload(
          userPic,
          {
            upload_preset: "socialAppPhotos",
            allowed_formats: [
              "jpg",
              "jpeg",
              "png",
              "svg",
              "ico",
              "webp",
              "jfif",
            ],
          },
          (error, result) => {
            error && res.json(error.message);
            try {
              user.pic = result.public_id;
              user.save();
            } catch (err) {
              res.json(err);
            }
          }
        );
      }
      const updatedUser = await UserModel.findOne({ eMail: email });
      console.log(updatedUser.pic);
      !userPic && res.status(400).send({ message: "Choose an image" });
      userPic &&
        res.status(201).send({
          message: "Data updated",
          userData: updatedUser,
        });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
};

export const addThought = async (req: Request, res: Response) => {
  const { email, thoughtContent } = req.body;
  if (email) {
    try {
      const user = await UserModel.findOne({ eMail: email });
      const newThought = await ThoughtModel.create({
        content: thoughtContent,
        created: new Date(),
        author: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          userPic: user.pic,
        },
      });
      console.log(newThought);
      await UserModel.updateOne(
        { eMail: email },
        { $push: { posts: newThought._id } }
      );
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
};
