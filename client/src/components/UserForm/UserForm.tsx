import { useState } from "react";
import RegisterFormTemplate from "../RegisterFormTemplate/RegisterFormTemplate";
import LoginFormTemplate from "../LoginFormTemplate/LoginFormTemplate";
import LoginSignupSwitcher from "../LoginSignupSwitcher/LoginSignupSwitcher";
import { signUp, login } from "../../services/api/auth";
import { IFormData } from "../../services/interfaces/interfaces";

const UserForm = (): JSX.Element => {
  const [haveAccount, setAccountStatus] = useState<boolean>(false);
  const [formData, newFormData] = useState<IFormData>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatedPassword: "",
    birthDate: "",
    email: "",
  });

  const accountStatusSwitcher = (): void => {
    setAccountStatus(!haveAccount);
  };
  const registerHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Sign up process");
    signUp(formData);
  };
  const loginHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("Login process");
    login(formData);
  };

  const onChangeHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    newFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      {!haveAccount && (
        <>
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
            onClickHandler={() => accountStatusSwitcher()}
            accountStatus={haveAccount}
          />
        </>
      )}
      {haveAccount && (
        <>
          <LoginFormTemplate
            loginHandler={loginHandler}
            onChangeHandler={onChangeHandler}
            email={formData.email}
            password={formData.password}
          />
          <LoginSignupSwitcher
            onClickHandler={() => accountStatusSwitcher()}
            accountStatus={haveAccount}
          />
        </>
      )}
    </>
  );
};

export default UserForm;
