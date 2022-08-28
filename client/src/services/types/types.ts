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
};
