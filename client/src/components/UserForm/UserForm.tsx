import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { hasAccountTrue, hasAccountFalse } from "../../actions/appDataAction";
import { clearAuthError } from "../../actions/userActions";
import RegisterFormTemplate from "../RegisterFormTemplate/RegisterFormTemplate";
import LoginFormTemplate from "../LoginFormTemplate/LoginFormTemplate";
import LoginSignupSwitcher from "../LoginSignupSwitcher/LoginSignupSwitcher";
import {
  loginHandler,
  registerHandler,
  onChangeHandler,
  switcherHandler,
} from "./Service";
import { signUp, login } from "../../services/api/auth";
import { IFormData, IRootState } from "../../interfaces/interfaces";
import { UserFormProps } from "../../types/types";
import { FormsContainer, ErrorParagraph } from "./UserForm.style";

const UserForm = ({ loadingHandler }: UserFormProps): JSX.Element => {
  const hasAccountStatus: boolean = useSelector(
    (state: IRootState) => state.appData.hasAccount
  );
  const navigate: NavigateFunction = useNavigate();

  const authError = useSelector(
    (state: IRootState) => state.userData.authError
  );

  const loggedStatus = useSelector(
    (state: IRootState) => state.userData.logged
  );

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

  useEffect(() => {
    loggedStatus && navigate("/logged");
  }, [loggedStatus]);

  return (
    <>
      <ErrorParagraph>
        {typeof authError === "string" && authError}
      </ErrorParagraph>
      {!hasAccountStatus && (
        <FormsContainer>
          <RegisterFormTemplate
            registerHandler={(e: React.SyntheticEvent) =>
              registerHandler(
                e,
                loadingHandler,
                signUp,
                formData,
                dispatch,
                navigate
              )
            }
            onChangeHandler={(e: React.SyntheticEvent) =>
              onChangeHandler(e, newFormData, formData)
            }
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
              switcherHandler(hasAccountTrue, dispatch, clearAuthError);
            }}
            accountStatus={hasAccountStatus}
          />
        </FormsContainer>
      )}
      {hasAccountStatus && (
        <FormsContainer>
          <LoginFormTemplate
            loginHandler={(e: React.SyntheticEvent) =>
              loginHandler(
                e,
                loadingHandler,
                formData,
                dispatch,
                navigate,
                login
              )
            }
            onChangeHandler={(e: React.SyntheticEvent) =>
              onChangeHandler(e, newFormData, formData)
            }
            email={formData.email}
            password={formData.password}
          />
          <LoginSignupSwitcher
            onClickHandler={() => {
              switcherHandler(hasAccountFalse, dispatch, clearAuthError);
            }}
            accountStatus={hasAccountStatus}
          />
        </FormsContainer>
      )}
    </>
  );
};

export default UserForm;
