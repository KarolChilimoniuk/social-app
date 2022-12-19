import mongoose, { ObjectId } from "mongoose";

export interface IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  userName: string;
  eMail: string;
  password: string;
  birthDate: Date;
  registerDate: Date;
  pic: string;
  chats: Array<ObjectId>;
  posts: Array<IThoughtInUser>;
  friendsList: Array<ObjectId>;
  groups: Array<ObjectId>;
  genAuthToken: (
    id: mongoose.Schema.Types.ObjectId,
    email: string,
    password: string
  ) => Promise<any>;
}

export interface IDecodedUserData {
  id: string;
  email: string;
  password: string;
  iat: number;
  exp: number;
}

export interface IThought {
  content: string;
  likes: { type: Array<string>; default: [] };
  comments: { type: Array<string>; default: [] };
  shares: { type: number; default: 0 };
  created: Date;
  author: {
    id: ObjectId;
    firstName: string;
    lastName: string;
    userPic: string;
  };
}

export interface IThoughtInUser {
  id: ObjectId;
  // content: string;
  // likes: { type: Array<string>; default: [] };
  // comments: { type: Array<string>; default: [] };
  // shares: { type: number; default: 0 };
}
