import React from "react";
import rootReducer from "../reducers";

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
};

export type UserPic = File | null;

export type ImgToPreview = string | ArrayBuffer | null;

export type UploadedImg = string | null;
