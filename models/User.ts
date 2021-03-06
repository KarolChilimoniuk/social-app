import mongoose, { ObjectId, Types, Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";

// types in interface are mainly taken from mongoose types in node_modules

interface IUser {
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
    email: string
  ) => Promise<any>;
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  eMail: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: Date,
  registerDate: { type: Date, default: Date.now() },
  chats: [Number],
  posts: [Number],
  friendsList: [Number],
  groups: [Number],
});

UserSchema.methods.genAuthToken = async (
  id: mongoose.Schema.Types.ObjectId,
  email: string
): Promise<any> => {
  const token = jwt.sign({ id: id, email: email }, process.env.PRIVATE_KEY, {
    expiresIn: "3d",
  });
  return token;
};

export const UserModel = model<IUser>("Users", UserSchema);

export const signUpValidation = (data: any) => {
  const JoiSchema = Joi.object({
    firstName: Joi.string().alphanum().required().label("First name"),
    lastName: Joi.string().alphanum().required().label("Last name"),
    birthDate: Joi.string().required().label("Birth date"),
    userName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("User name"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .label("Password"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "pl"] } })
      .required()
      .label("Email"),
  });
  return JoiSchema.validate({
    firstName: data.firstName,
    lastName: data.lastName,
    birthDate: data.birthDate,
    userName: data.userName,
    password: data.password,
    email: data.email,
  });
};

export const loginValidation = (data: any) => {
  const JoiSchema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .label("Password"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "pl"] } })
      .required()
      .label("Email"),
  });
  return JoiSchema.validate({
    email: data.email,
    password: data.password,
  });
};
