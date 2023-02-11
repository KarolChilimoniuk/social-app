import { RegisterFormTemplProps } from "../../types/types";
import FormInput from "../TextFormInput/TextFormInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import BirthDateInput from "../BirthDateInput/BirthDate";
import SubInput from "../SubmitInput/SubmitInput";
import {
  FormContainer,
  FormBackground,
  Form,
} from "./RegisterFormTemplate.style";

const RegisterFormTemplate = ({
  registerHandler,
  onChangeHandler,
  userName,
  firstName,
  lastName,
  password,
  repeatedPassword,
  email,
}: RegisterFormTemplProps): JSX.Element => {
  return (
    <FormBackground>
      <FormContainer>
        <Form onSubmit={registerHandler}>
          <FormInput
            type={"text"}
            placeholder={"First name"}
            name={"firstName"}
            onChangeHandler={onChangeHandler}
            value={firstName}
          />
          <FormInput
            type={"text"}
            placeholder={"Last name"}
            name={"lastName"}
            onChangeHandler={onChangeHandler}
            value={lastName}
          />
          <FormInput
            type={"text"}
            placeholder={"User name"}
            name={"userName"}
            onChangeHandler={onChangeHandler}
            value={userName}
          />
          <FormInput
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            onChangeHandler={onChangeHandler}
            value={email}
          />
          <BirthDateInput onChangeHandler={onChangeHandler} />
          <PasswordInput
            name={"password"}
            value={password}
            placeholder={"Password"}
            onChangeHandler={onChangeHandler}
          />
          <PasswordInput
            name={"repeatedPassword"}
            value={repeatedPassword}
            placeholder={"Repeat your password"}
            onChangeHandler={onChangeHandler}
          />
          <SubInput value={"Sign up"} />
        </Form>
      </FormContainer>
    </FormBackground>
  );
};

export default RegisterFormTemplate;
