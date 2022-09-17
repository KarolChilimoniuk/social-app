import React, { useState } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { IFormData } from "../../services/interfaces/interfaces";
import TextFormInput from "../../components/TextFormInput/TextFormInput";
import BirthDateInput from "../../components/BirthDateInput/BirthDate";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import FileInput from "../../components/FileInput/FileInput";
import SubInput from "../../components/SubmitInput/SubmitInput";
import { IRootState } from "../../services/interfaces/interfaces";
import { editData } from "../../services/api/userPanel";
import {
  ErrorParagraph,
  FormContainer,
  Form,
  FormHeader,
} from "./UserPanel.style";

const UserPanel = (): JSX.Element => {
  const userEmail: string = useSelector(
    (state: IRootState) => state.userData.eMail
  );
  const error: string = useSelector(
    (state: IRootState) => state.userData.authError
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
    userPic: "",
  });

  const onChangeHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    newFormData({ ...formData, [target.name]: target.value });
  };

  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    editData(formData, userEmail, dispatch);
    console.log(error);
  };
  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        {error !== "" ? <ErrorParagraph>{error}</ErrorParagraph> : null}
        <FormHeader>Edit profile</FormHeader>
        <TextFormInput
          type={"text"}
          placeholder={"New first name"}
          name={"firstName"}
          value={formData.firstName}
          onChangeHandler={onChangeHandler}
        />
        <TextFormInput
          type={"text"}
          placeholder={"New last name"}
          name={"lastName"}
          value={formData.lastName}
          onChangeHandler={onChangeHandler}
        />
        <TextFormInput
          type={"text"}
          placeholder={"New user name"}
          name={"userName"}
          value={formData.userName}
          onChangeHandler={onChangeHandler}
        />
        <TextFormInput
          type={"email"}
          placeholder={"New e-mail"}
          name={"email"}
          value={formData.email}
          onChangeHandler={onChangeHandler}
        />
        <PasswordInput
          placeholder={"New password"}
          name={"password"}
          value={formData.password}
          onChangeHandler={onChangeHandler}
        />
        <PasswordInput
          placeholder={"Repeat new password"}
          name={"repeatedPassword"}
          value={formData.repeatedPassword}
          onChangeHandler={onChangeHandler}
        />
        <BirthDateInput onChangeHandler={onChangeHandler} />
        <FileInput
          name={"userPic"}
          accept={".jpg, .jpeg, .png"}
          value={formData.userPic}
        />
        <SubInput value={"Edit user data"} />
      </Form>
    </FormContainer>
  );
};

export default UserPanel;
