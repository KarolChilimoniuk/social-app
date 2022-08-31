import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hasAccountTrue,
  hasAccountFalse,
} from "../../services/actions/appDataAction";
import { clearAuthError } from "../../services/actions/userActions";
import RegisterFormTemplate from "../RegisterFormTemplate/RegisterFormTemplate";
import LoginFormTemplate from "../LoginFormTemplate/LoginFormTemplate";
import LoginSignupSwitcher from "../LoginSignupSwitcher/LoginSignupSwitcher";
import { signUp, login } from "../../services/api/auth";
import { IFormData, IRootState } from "../../services/interfaces/interfaces";
import { ErrorParagraph } from "./UserForm.style";

const UserForm = (): JSX.Element => {
  const hasAccountStatus = useSelector(
    (state: IRootState) => state.appData.hasAccount
  );
  const navigate = useNavigate();

  const error = useSelector((state: IRootState) => state.userData.authError);
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

  const registerHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Sign up process");
    signUp(formData, dispatch, navigate);
  };
  const loginHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Login process");
    login(formData, dispatch, navigate);
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
              dispatch(clearAuthError());
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
              dispatch(clearAuthError());
            }}
            accountStatus={hasAccountStatus}
          />
        </>
      )}
    </>
  );
};

export default UserForm;
