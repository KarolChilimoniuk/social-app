import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cloud from "../services/cloudinary";
import { UserModel } from "../models/User";
import { ThoughtModel } from "../models/Thought";
import { IUser } from "services/interfaces";

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
      const updatedUser: IUser = await UserModel.findOne({ eMail: user.eMail });
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
          async (error, result) => {
            error && res.json(error.message);
            try {
              const user = await UserModel.findOneAndUpdate(
                { eMail: email },
                { pic: result.public_id }
              );
            } catch (err) {
              res.json(err);
            }
          }
        );
        const updatedUser = await UserModel.findOne({ eMail: email });
        updatedUser &&
          res.status(201).send({
            message: "Data updated",
            userData: updatedUser,
          });
      }
      !userPic && res.status(400).send({ message: "Choose an image" });
    } catch (error) {
      res.json(error);
    }
  }
};

export const addThought = async (req: Request, res: Response) => {
  const { email, thoughtContent } = req.body;
  let listOfThoughts;
  if (email) {
    try {
      const user = await UserModel.findOne({ eMail: email });
      const newThought = await ThoughtModel.create({
        textContent: thoughtContent,
        author: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          userPic: user.pic,
        },
      });
      await UserModel.updateOne(
        { eMail: email },
        { $push: { posts: newThought._id } }
      );
      const updatedUser = await UserModel.findOne({ eMail: email });
      if (user.posts.length > 0) {
        listOfThoughts = await Promise.all(
          updatedUser.posts.map(async (id) => {
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
      res.status(201).send({
        message: "Thought added",
        userData: listOfThoughts,
      });
    } catch (error) {
      console.log(error);
      res.json(error.message);
    }
  }
};
