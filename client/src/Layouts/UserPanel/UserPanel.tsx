import React, { useState, useEffect } from "react";
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
  UpdateParagraph,
  FormContainer,
  Form,
  FormHeader,
} from "./UserPanel.style";

const UserPanel = (): JSX.Element => {
  const userEmail: string = useSelector(
    (state: IRootState) => state.userData.eMail
  );

  const userName: string = useSelector(
    (state: IRootState) => state.userData.userName
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
    userPic: null,
  });
  const [updateStatus, setUpdateStatus] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    newFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  const onChangePic = (e: React.ChangeEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    newFormData({ ...formData, userPic: target.files![0] });
    console.log(target.files);
  };

  const submitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    await editData(formData, userEmail, dispatch, setUpdateStatus);
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        {error !== "" && updateStatus === false ? (
          <ErrorParagraph>{error}</ErrorParagraph>
        ) : null}
        {error === "" && updateStatus === true ? (
          <UpdateParagraph>Data updated</UpdateParagraph>
        ) : null}
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
          onChangeHandler={onChangePic}
        />
        {/* <ImgFileDropzone /> */}
        <SubInput value={"Edit user data"} />
      </Form>
    </FormContainer>
  );
};

export default UserPanel;
