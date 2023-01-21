import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cloud from "../services/cloudinary";
import { UserModel } from "../models/User";
import { ThoughtModel } from "../models/Thought";
import {
  getUserFriends,
  getUserPosts,
  getPostsToShow,
} from "../services/userMethods";
import { IUser, IThoughtInPushMethod } from "services/interfaces";

// Edit user data controller

export const editUserData = async (req: Request, res: Response) => {
  const {
    userId,
    userName,
    firstName,
    lastName,
    password,
    repeatedPassword,
    birthDate,
    email,
  } = req.body;
  try {
    const user = await UserModel.findOne({ _id: userId });
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
      const updatedUser: IUser = await UserModel.findOne({ _id: user._id });
      res.status(201).send({ message: "Data Updated", userData: updatedUser });
    }
  } catch (err) {
    res.json(err.message);
  }
};

// Edit user profile pic controller

export const editUserPic = async (req: Request, res: Response) => {
  const { userPic, userId } = req.body;
  console.log(
    process.env.CLOUDINARY_NAME,
    process.env.CLOUDINARY_APIKEY,
    process.env.CLOUDINARY_SECRET
  );
  if (userId) {
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
                { _id: userId },
                { pic: result.public_id }
              );
            } catch (err) {
              res.json(err);
            }
          }
        );
        const updatedUser = await UserModel.findOne({ _id: userId });
        updatedUser &&
          res.status(201).send({
            message: "Data updated",
            userData: updatedUser,
          });
      }
      !userPic && res.status(400).send({ message: "Choose an image" });
    } catch (err) {
      res.json(err.message);
    }
  }
};

// Add new thought(post) controller

export const addThought = async (req: Request, res: Response) => {
  const { email, thoughtContent } = req.body;
  let listOfFriends: Array<IUser> = [];
  let userPosts: Array<IThoughtInPushMethod> = [];
  let thoughtsToShow: Array<IThoughtInPushMethod> = [];
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
      listOfFriends = await getUserFriends(updatedUser);
      userPosts = await getUserPosts(updatedUser);
      thoughtsToShow = await getPostsToShow(listOfFriends, updatedUser);
      res.status(201).send({
        message: "Thought added",
        userData: {
          allPostsToShow: thoughtsToShow,
          userPosts: userPosts,
        },
      });
    } catch (err) {
      res.json(err.message);
    }
  }
};
