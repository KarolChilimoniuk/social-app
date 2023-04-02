import { Response, Request } from "express";
import { UserModel } from "../models/User";
import {
  getUserFollowed,
  getUserFollowers,
  getUserPosts,
  getComments,
  getCommentResponses,
} from "../userMethods";
import { IUser, IThought, IThoughtInPushMethod, IComment } from "interfaces";
import { ThoughtModel } from "../models/Thought";
import { CommentModel } from "../models/Comment";

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
        description: user.description,
        userPosts: userPosts,
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

export const fetchFollowed = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    !id && res.status(400).json("Bad request :(");
    const user: IUser = await UserModel.findById(id);
    !user && res.status(404).json("User not found :(");
    const listOfFollowed: Array<IUser> = await getUserFollowed(user);
    res.status(200).send({
      listOfFollowed: listOfFollowed,
    });
  } catch (err) {
    res.json(err.message);
  }
};

export const fetchFollowers = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    !id && res.status(400).json("Bad request :(");
    const user: IUser = await UserModel.findById(id);
    !user && res.status(404).json("User not found :(");
    const listOfFollowers: Array<IUser> = await getUserFollowers(user);
    res.status(200).send({
      listOfFollowers: listOfFollowers,
    });
  } catch (err) {
    res.json(err.message);
  }
};

export const fetchComments = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    !id && res.status(400).json("Bad request :(");
    const thought: IThought = await ThoughtModel.findById(id);
    !thought && res.status(404).json("Thought not found :(");
    const thoughtAuthor = await UserModel.findById(thought.author._id);
    const commentsData = await getComments(thought.comments);
    console.log(commentsData);
    res.status(200).send({
      _id: thought._id,
      author: {
        _id: thoughtAuthor._id,
        firstName: thoughtAuthor.firstName,
        lastName: thoughtAuthor.lastName,
        pic: thoughtAuthor.pic,
      },
      created: thought.created,
      textContent: thought.textContent,
      shares: thought.shares,
      likes: thought.likes,
      comments: commentsData,
    });
  } catch (err) {
    res.json(err.message);
  }
};

export const fetchCommentResponses = async (req: Request, res: Response) => {
  const { thoughtId, commentId } = req.params;
  try {
    !thoughtId && res.status(400).json("Bad request :(");
    const comment: IComment = await CommentModel.findById(commentId);
    !comment && res.status(404).json("Comment not found :(");
    const responsesData = await getCommentResponses(comment.responses);
    console.log(responsesData);
    res.status(200).send({
      responses: responsesData,
    });
  } catch (err) {
    res.json(err.message);
  }
};
