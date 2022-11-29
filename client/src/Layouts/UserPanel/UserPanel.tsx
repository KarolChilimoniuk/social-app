import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { IRootState, IFormData } from "../../services/interfaces/interfaces";
import { UserPic, ImgToPreview, UploadedImg } from "../../services/types/types";
import TextFormInput from "../../components/TextFormInput/TextFormInput";
import BirthDateInput from "../../components/BirthDateInput/BirthDate";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import FormFileInput from "../../components/FileInput/FileInput";
import SubInput from "../../components/SubmitInput/SubmitInput";
import UploadedUserImg from "../../components/UploadedUserImg/UploadedUserImg";
import { editData, editUserPic } from "../../services/api/userPanel";
import {
  ErrorParagraph,
  FormContainer,
  Form,
  FormHeader,
  UpdateParagraph,
  SectionContainer,
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
  });

  const [userPic, newUserPic] = useState<UserPic>(null);

  const [imgToPreview, setImagePreview] = useState<ImgToPreview>(null);

  const [uploadedImg, setUploadedImg] = useState<UploadedImg>(null);

  const [updateStatus, setUpdateStatus] = useState<boolean>(false);

  const setPreview = (userPic: UserPic) => {
    const reader = new FileReader();
    reader.readAsDataURL(userPic!);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const onChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    newFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  const onChangePic = (e: React.ChangeEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    const file: UserPic = target.files![0];
    newUserPic(file);
    setPreview(file);
  };

  const textSubmitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    await editData(formData, userEmail, dispatch, setUpdateStatus);
  };

  const imgSubmitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      const uploadedImageData = await editUserPic(imgToPreview);
      typeof uploadedImageData === "string" &&
        setUploadedImg(uploadedImageData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SectionContainer>
      <FormContainer>
        <Form onSubmit={textSubmitHandler}>
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
          <SubInput value={"Edit user data"} />
        </Form>
        <Form onSubmit={imgSubmitHandler}>
          <FormFileInput
            name={"userPic"}
            accept={"image/*"}
            onChangeHandler={onChangePic}
          />
          <SubInput value={"Edit profile photo"} />
        </Form>
      </FormContainer>
      {typeof uploadedImg === "string" && (
        <UploadedUserImg imgId={uploadedImg} />
      )}
    </SectionContainer>
  );
};

export default UserPanel;