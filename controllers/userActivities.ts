import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cloud from "../services/cloudinary";
import { UserModel } from "../models/User";
import { ThoughtModel } from "../models/Thought";
import {
  getUserFollowed,
  getUserFollowers,
  getUserPosts,
  getPostsToShow,
} from "../userMethods";
import { IUser, IThoughtInPushMethod, IThought } from "interfaces";

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
      const listOfFollowed: Array<IUser> = await getUserFollowed(updatedUser);
      const listOfFollowers: Array<IUser> = await getUserFollowers(updatedUser);
      const userPosts: Array<IThoughtInPushMethod> = await getUserPosts(
        updatedUser
      );
      const thoughtsToShow: Array<IThoughtInPushMethod> = await getPostsToShow(
        listOfFollowed,
        updatedUser
      );
      res.status(201).send({
        message: "Data Updated",
        userData: {
          _id: updatedUser._id,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          userName: updatedUser.userName,
          eMail: updatedUser.eMail,
          birthDate: updatedUser.birthDate,
          registerDate: updatedUser.registerDate,
          pic: updatedUser.pic,
          chats: updatedUser.chats,
          allPostsToShow: thoughtsToShow,
          userPosts: userPosts,
          followed: listOfFollowed,
          followers: listOfFollowers,
          groups: updatedUser.groups,
        },
      });
    }
  } catch (err) {
    res.json(err.message);
  }
};

// Edit user profile pic controller

export const editUserPic = async (req: Request, res: Response) => {
  const { userPic, userId } = req.body;
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
        const listOfFollowed: Array<IUser> = await getUserFollowed(updatedUser);
        const listOfFollowers: Array<IUser> = await getUserFollowers(
          updatedUser
        );
        const userPosts: Array<IThoughtInPushMethod> = await getUserPosts(
          updatedUser
        );
        const thoughtsToShow: Array<IThoughtInPushMethod> =
          await getPostsToShow(listOfFollowed, updatedUser);
        updatedUser &&
          res.status(201).send({
            message: "Data updated",
            userData: {
              _id: updatedUser._id,
              firstName: updatedUser.firstName,
              lastName: updatedUser.lastName,
              userName: updatedUser.userName,
              eMail: updatedUser.eMail,
              birthDate: updatedUser.birthDate,
              registerDate: updatedUser.registerDate,
              pic: updatedUser.pic,
              chats: updatedUser.chats,
              allPostsToShow: thoughtsToShow,
              userPosts: userPosts,
              followed: listOfFollowed,
              followers: listOfFollowers,
              groups: updatedUser.groups,
            },
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
  if (email) {
    try {
      const user: IUser = await UserModel.findOne({ eMail: email });
      const newThought = await ThoughtModel.create({
        textContent: thoughtContent,
        author: {
          _id: user._id,
        },
      });
      await UserModel.updateOne(
        { eMail: email },
        { $push: { posts: newThought._id } }
      );
      const updatedUser: IUser = await UserModel.findOne({ eMail: email });
      const listOfFollowed: Array<IUser> = await getUserFollowed(updatedUser);
      const userPosts: Array<IThoughtInPushMethod> = await getUserPosts(
        updatedUser
      );
      const thoughtsToShow: Array<IThoughtInPushMethod> = await getPostsToShow(
        listOfFollowed,
        updatedUser
      );
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

// Add like to the post

export const addLike = async (req: Request, res: Response) => {
  const { thoughtId, userId } = req.body;
  if (thoughtId) {
    try {
      const thought = await ThoughtModel.findOneAndUpdate(
        { _id: thoughtId },
        { $push: { likes: userId } }
      );
      if (!thought) {
        res.status(404).send({
          message: "Thought not found :(",
        });
      }
      const updatedThought = await ThoughtModel.findById(thoughtId);
      res.status(200).send({
        message: "Like added",
        thoughtData: updatedThought,
      });
    } catch (err) {
      res.json(err.message);
    }
  }
};

// Remove like from the post

export const removeLike = async (req: Request, res: Response) => {
  const { thoughtId, userId } = req.body;
  if (thoughtId) {
    try {
      const thought = await ThoughtModel.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { likes: userId } }
      );
      if (!thought) {
        res.status(404).send({
          message: "Thought not found :(",
        });
      }
      const updatedThought: Array<IThought> = await ThoughtModel.findById(
        thoughtId
      );
      res.status(200).send({
        message: "Like removed",
        thoughtData: updatedThought,
      });
    } catch (err) {
      res.json(err.message);
    }
  }
};

// Follow user

export const follow = async (req: Request, res: Response) => {
  try {
    const { followerId, followedId } = req.body;
    if (followerId && followedId) {
      const follower = await UserModel.findOneAndUpdate(
        { _id: followerId },
        { $push: { followed: followedId } }
      );
      const followed = await UserModel.findOneAndUpdate(
        { _id: followedId },
        { $push: { followers: followerId } }
      );
      if (!follower || !followed) {
        return res.status(404).send({
          message: "User can't be found :(",
        });
      }
      const updatedUser: IUser = await UserModel.findOne({ _id: followerId });
      const listOfFollowed: Array<IUser> = await getUserFollowed(updatedUser);
      const thoughtsToShow: Array<IThoughtInPushMethod> = await getPostsToShow(
        listOfFollowed,
        updatedUser
      );
      return res.status(200).send({
        message: "Follow",
        listOfFollowed: updatedUser.followed,
        thoughtsToShow: thoughtsToShow,
      });
    }
  } catch (err) {
    res.json(err.message);
  }
};

// Unfollow user

export const unFollow = async (req: Request, res: Response) => {
  const { followerId, followedId } = req.body;
  if (followerId && followedId) {
    try {
      const follower = await UserModel.findOneAndUpdate(
        { _id: followerId },
        { $pull: { followed: followedId } }
      );
      const followed = await UserModel.findOneAndUpdate(
        { _id: followedId },
        { $pull: { followers: followerId } }
      );
      if (!follower || !followed) {
        res.status(404).send({
          message: "User can't be found :(",
        });
      }
      const updatedUser: IUser = await UserModel.findOne({ _id: followerId });
      const listOfFollowed: Array<IUser> = await getUserFollowed(updatedUser);
      const thoughtsToShow: Array<IThoughtInPushMethod> = await getPostsToShow(
        listOfFollowed,
        updatedUser
      );
      res.status(200).send({
        message: "Unfollow",
        listOfFollowed: updatedUser.followed,
        thoughtsToShow: thoughtsToShow,
      });
    } catch (err) {
      res.json(err.message);
    }
  }
};
