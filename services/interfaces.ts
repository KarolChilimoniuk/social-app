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
  posts: Array<ObjectId>;
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
