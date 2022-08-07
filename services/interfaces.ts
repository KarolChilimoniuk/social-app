import mongoose, { ObjectId, Types, Schema, model } from "mongoose";

export interface IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  userName: string;
  eMail: string;
  password: string;
  birthDate: Date;
  registerDate: Date;
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
