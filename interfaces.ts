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
  description: string;
  chats: Array<string>;
  posts: Array<string>;
  followed: Array<string>;
  followers: Array<string>;
  groups: Array<string>;
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
  _id: ObjectId;
  textContent: string;
  likes: Array<string>;
  comments: Array<string>;
  shares: number;
  created: Date;
  author: {
    _id: ObjectId;
  };
}

export interface IThoughtInPushMethod {
  _id: string;
  textContent: string;
  likes: Array<string>;
  comments: Array<IComment> | Array<string>;
  shares: number;
  created: Date;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
    pic: string;
  };
}
export interface IComment {
  _id: ObjectId;
  responses: Array<string>;
  author: {
    _id: ObjectId;
  };
  content: string;
  created: Date;
  likes: Array<string>;
}

export interface IThoughtCommentData {
  author: { _id: string; firstName: string; lastName: string; pic: string };
  content: string;
  created: Date;
  likes: Array<string>;
}
