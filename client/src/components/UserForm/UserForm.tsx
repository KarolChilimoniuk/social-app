import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { hasAccountTrue, hasAccountFalse } from "../../actions/appDataAction";
import { clearAuthError } from "../../actions/userActions";
import RegisterFormTemplate from "../RegisterFormTemplate/RegisterFormTemplate";
import LoginFormTemplate from "../LoginFormTemplate/LoginFormTemplate";
import LoginSignupSwitcher from "../LoginSignupSwitcher/LoginSignupSwitcher";
import { signUp, login } from "../../services/api/auth";
import { IFormData, IRootState } from "../../interfaces/interfaces";
import { FormsContainer, ErrorParagraph } from "./UserForm.style";

const UserForm = (): JSX.Element => {
  const hasAccountStatus: boolean = useSelector(
    (state: IRootState) => state.appData.hasAccount
  );
  const navigate: NavigateFunction = useNavigate();

  const loggedUserData = useSelector((state: IRootState) => state.userData);

  const dispatch: Dispatch = useDispatch();

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
    signUp(formData, dispatch, navigate);
  };
  const loginHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    login(formData, dispatch, navigate);
  };
  const onChangeHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    newFormData({ ...formData, [target.name]: target.value });
  };

  useEffect(() => {
    loggedUserData.logged === true && navigate("/logged");
  }, [loggedUserData.logged]);

  return (
    <>
      {loggedUserData.authError !== "" ? (
        <ErrorParagraph>{loggedUserData.authError}</ErrorParagraph>
      ) : null}
      {!hasAccountStatus && (
        <FormsContainer>
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
        </FormsContainer>
      )}
      {hasAccountStatus && (
        <FormsContainer>
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
        </FormsContainer>
      )}
    </>
  );
};

export default UserForm;
