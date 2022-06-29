import mongoose, { ObjectId } from "mongoose";
const { Schema, model } = mongoose;

// types in interface are mainly taken from mongoose types in node_modules

interface IUser {
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
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  eMail: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: Date,
  registerDate: Date,
  chats: [Number],
  posts: [Number],
  friendsList: [Number],
  groups: [Number],
});

export const UserModel = model<IUser>("Users", UserSchema);
