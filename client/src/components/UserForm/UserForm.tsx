import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../services/interfaces/interfaces";
import {
  hasAccountTrue,
  hasAccountFalse,
} from "../../services/actions/appDataAction";
import RegisterFormTemplate from "../RegisterFormTemplate/RegisterFormTemplate";
import LoginFormTemplate from "../LoginFormTemplate/LoginFormTemplate";
import LoginSignupSwitcher from "../LoginSignupSwitcher/LoginSignupSwitcher";
import { signUp, login } from "../../services/api/auth";
import { IFormData } from "../../services/interfaces/interfaces";
import { ErrorParagraph } from "./UserForm.style";

const UserForm = (): JSX.Element => {
  const [error, errorHandler] = useState<string>("");
  const hasAccountStatus = useSelector(
    (state: IRootState) => state.appData.hasAccount
  );
  const dispatch = useDispatch();

  const [formData, newFormData] = useState<IFormData>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatedPassword: "",
    birthDate: "",
    email: "",
  });

  const setError = (err: string): void => {
    errorHandler(err);
  };
  const registerHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Sign up process");
    signUp(formData, setError);
  };
  const loginHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Login process");
    login(formData, setError);
  };

  const onChangeHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    newFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      {!hasAccountStatus && (
        <>
          {error !== "" ? <ErrorParagraph>{error}</ErrorParagraph> : null}
          <RegisterFormTemplate
            registerHandler={registerHandler}
            onChangeHandler={onChangeHandler}
            userName={formData.userName}
            firstName={formData.firstName}
            lastName={formData.lastName}
            password={formData.password}
            repeatedPassword={formData.repeatedPassword}
            birthDate={formData.birthDate}
            email={formData.email}
          />
          <LoginSignupSwitcher
            onClickHandler={() => {
              dispatch(hasAccountTrue());
              setError("");
            }}
            accountStatus={hasAccountStatus}
          />
        </>
      )}
      {hasAccountStatus && (
        <>
          {error !== "" ? <ErrorParagraph>{error}</ErrorParagraph> : null}
          <LoginFormTemplate
            loginHandler={loginHandler}
            onChangeHandler={onChangeHandler}
            email={formData.email}
            password={formData.password}
          />
          <LoginSignupSwitcher
            onClickHandler={() => {
              dispatch(hasAccountFalse());
              setError("");
            }}
            accountStatus={hasAccountStatus}
          />
        </>
      )}
    </>
  );
};

export default UserForm;
