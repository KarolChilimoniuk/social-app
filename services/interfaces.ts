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
  posts: Array<string>;
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
  _id: ObjectId;
  textContent: string;
  likes: Array<string>;
  comments: Array<IComment>;
  shares: number;
  created: Date;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    userPic: string;
  };
}

export interface IComment {
  id: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    img: string;
  };
  content: string;
  date: Date;
}
