import GoogleLoginComp from "../GoogleLoginComp/GoogleLoginComp";
import { LoginFormTemplateProps } from "../../types/types";
import FormInput from "../TextFormInput/TextFormInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import SubInput from "../SubmitInput/SubmitInput";
import {
  FormBackground,
  FormContainer,
  Form,
  SubmitContainer,
} from "./LoginFormTemplate.style";

const LoginFormTemplate = ({
  loadingHandler,
  loginHandler,
  onChangeHandler,
  email,
  password,
}: LoginFormTemplateProps): JSX.Element => {
  return (
    <FormBackground>
      <FormContainer>
        <Form onSubmit={loginHandler}>
          <FormInput
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={email}
            onChangeHandler={onChangeHandler}
          />
          <PasswordInput
            name={"password"}
            value={password}
            placeholder={"Password"}
            onChangeHandler={onChangeHandler}
          />
          <SubmitContainer>
            <SubInput value={"Log in"} />
          </SubmitContainer>
        </Form>
        <GoogleLoginComp loadingHandler={loadingHandler} />
      </FormContainer>
    </FormBackground>
  );
};

export default LoginFormTemplate;
