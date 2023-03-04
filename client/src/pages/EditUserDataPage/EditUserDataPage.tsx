import React, { useState } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  IRootState,
  IFormData,
  IUserDataState,
} from "../../interfaces/interfaces";
import { UserPic, ImgToPreview, UploadedImg } from "../../types/types";
import TextFormInput from "../../components/TextFormInput/TextFormInput";
import BirthDateInput from "../../components/BirthDateInput/BirthDate";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import FormFileInput from "../../components/FileInput/FileInput";
import SubInput from "../../components/SubmitInput/SubmitInput";
import UploadedUserImg from "../../components/UserProfileImg/UserProfileImg";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import { editData, editUserPic } from "../../services/api/editUserData";
import {
  ErrorParagraph,
  FormContainer,
  Form,
  FormHeader,
  FormParagraph,
  UpdateParagraph,
  SectionContainer,
  ImgContainer,
} from "./EditUserDataPage.style";

const UserPanel = (): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
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

  const [uploadedImg, setUploadedImg] = useState<UploadedImg>(
    loggedUserData.pic
  );

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
  };

  const onChangePic = (e: React.ChangeEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    const file: UserPic = target.files![0];
    newUserPic(file);
    setPreview(file);
  };

  const textSubmitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    await editData(formData, loggedUserData._id, dispatch, setUpdateStatus);
  };

  const imgSubmitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    const uploadedImageData = await editUserPic(
      imgToPreview,
      loggedUserData._id,
      dispatch
    );
    typeof uploadedImageData === "string" &&
      uploadedImageData !== "choose an image" &&
      setUploadedImg(uploadedImageData);
  };

  return (
    <SectionContainer>
      <FormContainer>
        <Form onSubmit={textSubmitHandler}>
          {loggedUserData.authError !== "" && updateStatus === false ? (
            <ErrorParagraph>{loggedUserData.authError}</ErrorParagraph>
          ) : null}
          {loggedUserData.authError === "" && updateStatus === true ? (
            <UpdateParagraph>Data updated</UpdateParagraph>
          ) : null}
          <FormHeader>Edit profile</FormHeader>
          <FormParagraph>{loggedUserData.firstName}</FormParagraph>
          <TextFormInput
            type={"text"}
            placeholder={"New first name"}
            name={"firstName"}
            value={formData.firstName}
            onChangeHandler={onChangeHandler}
          />
          <FormParagraph>{loggedUserData.lastName}</FormParagraph>
          <TextFormInput
            type={"text"}
            placeholder={"New last name"}
            name={"lastName"}
            value={formData.lastName}
            onChangeHandler={onChangeHandler}
          />
          <FormParagraph>{loggedUserData.userName}</FormParagraph>
          <TextFormInput
            type={"text"}
            placeholder={"New user name"}
            name={"userName"}
            value={formData.userName}
            onChangeHandler={onChangeHandler}
          />
          <FormParagraph>{loggedUserData.eMail}</FormParagraph>
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
      {typeof uploadedImg === "string" && uploadedImg !== "" && (
        <ImgContainer>
          <UploadedUserImg
            imgId={uploadedImg}
            width={200}
            height={200}
            radius={160}
          />
        </ImgContainer>
      )}
      <DesktopNav />
    </SectionContainer>
  );
};

export default UserPanel;
