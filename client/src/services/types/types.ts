import React from "react";
import rootReducer from "../reducers";
import { IComment, ILike } from "../interfaces/interfaces";

export type RootState = ReturnType<typeof rootReducer>;
export type LoginFormTemplateProps = {
  loginHandler(e: React.SyntheticEvent): void;
  onChangeHandler(e: React.SyntheticEvent): void;
  email: string;
  password: string;
};

export type RegisterFormTemplProps = {
  registerHandler(e: React.SyntheticEvent): void;
  onChangeHandler(e: React.SyntheticEvent): void;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatedPassword: string;
  birthDate: string;
  email: string;
};

export type InputProps = {
  onChangeHandler?(e: React.SyntheticEvent): void;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: string;
  accept?: string;
  enctype?: string;
  width?: string;
  height?: string;
  rows?: string;
  cols?: string;
};

export type TextAreaProps = {
  onChangeHandler?(e: React.SyntheticEvent): void;
  placeholder?: string;
  name?: string;
  value?: string;
  width?: string;
  height?: string;
  rows?: number;
  cols?: number;
};

export type SwitcherProps = {
  accountStatus: boolean;
  onClickHandler?(e: React.SyntheticEvent): void;
};

export type UserBarProps = {
  NavHandler: () => void;
};

export type NavProps = {
  active: boolean;
};

export type BurgerBarProps = {
  onClickNavHandler: () => void;
};

export type UserNavDropdownProps = {
  userName: string;
};

export type UploadedUserImgProps = {
  imgId: string | undefined;
  width: number;
  height: number;
  radius: number;
};

export type ThoughtProps = {
  authorFirstName: string;
  authorLastName: string;
  authorPic: string;
  date: string;
  content: string;
  comments?: [IComment];
  likes?: [ILike];
};

export type UserPic = File | null;

export type UserProfilePic = string | undefined;

export type ImgToPreview = string | ArrayBuffer | null;

export type UploadedImg = string | null;
