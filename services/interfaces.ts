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
  chats: Array<string>;
  posts: Array<string>;
  friendsList: Array<string>;
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
  comments: Array<IComment>;
  shares: number;
  created: Date;
  author: {
    _id: string;
  };
}

export interface IComment {
  _id: string;
  author: {
    _id: ObjectId;
  };
  content: string;
  date: Date;
}
