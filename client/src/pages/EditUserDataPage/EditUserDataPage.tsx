import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  IRootState,
  IFormData,
  IUserDataState,
} from "../../interfaces/interfaces";
import { ImgToPreview, UploadedImg } from "../../types/types";
import TextFormInput from "../../components/TextFormInput/TextFormInput";
import TextArea from "../../components/TextArea/TextArea";
import BirthDateInput from "../../components/BirthDateInput/BirthDate";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import FormFileInput from "../../components/FileInput/FileInput";
import SubInput from "../../components/SubmitInput/SubmitInput";
import UploadedUserImg from "../../components/UserProfileImg/UserProfileImg";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import {
  imgSubmitHandler,
  onChangePic,
  onChangeTextHandler,
  textSubmitHandler,
} from "./service";
import { editData, editUserPic } from "../../services/api/editUserData";
import {
  EditDataBackground,
  ErrorParagraph,
  FormSecondParagraph,
  FormContainer,
  Form,
  FormHeader,
  FormParagraph,
  UpdateParagraph,
  UserDataContainer,
  EditDataSection,
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
    description: "",
    birthDate: "",
    email: "",
  });

  const [imgToPreview, setImagePreview] = useState<ImgToPreview>(null);

  const [uploadedImg, setUploadedImg] = useState<UploadedImg>(
    loggedUserData.pic
  );

  const [updateStatus, setUpdateStatus] = useState<boolean>(false);

  useEffect(() => {
    setUploadedImg(loggedUserData.pic);
  }, [loggedUserData.pic]);

  return (
    <EditDataBackground>
      <EditDataSection>
        <UserDataContainer>
          <FormContainer>
            <Form
              onSubmit={(e: React.SyntheticEvent) =>
                textSubmitHandler(
                  e,
                  editData,
                  formData,
                  loggedUserData._id,
                  dispatch,
                  setUpdateStatus,
                  newFormData
                )
              }
            >
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
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <FormParagraph>{loggedUserData.lastName}</FormParagraph>
              <TextFormInput
                type={"text"}
                placeholder={"New last name"}
                name={"lastName"}
                value={formData.lastName}
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <FormParagraph>{loggedUserData.userName}</FormParagraph>
              <TextFormInput
                type={"text"}
                placeholder={"New user name"}
                name={"userName"}
                value={formData.userName}
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <FormParagraph>{loggedUserData.eMail}</FormParagraph>
              <TextFormInput
                type={"email"}
                placeholder={"New e-mail"}
                name={"email"}
                value={formData.email}
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <FormParagraph>Something about you:</FormParagraph>
              {loggedUserData.description! !== "" ? (
                <FormSecondParagraph>
                  {loggedUserData.description}
                </FormSecondParagraph>
              ) : null}
              <TextArea
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
                value={formData.description}
                name={"description"}
                placeholder={"Write something about you"}
              />
              <FormParagraph>Password:</FormParagraph>
              <PasswordInput
                placeholder={"New password"}
                name={"password"}
                value={formData.password}
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <PasswordInput
                placeholder={"Repeat new password"}
                name={"repeatedPassword"}
                value={formData.repeatedPassword}
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <FormParagraph>Birth date:</FormParagraph>
              <BirthDateInput
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangeTextHandler(e, formData, newFormData)
                }
              />
              <SubInput value={"Edit user data"} />
            </Form>
            <Form
              onSubmit={(e: React.SyntheticEvent) =>
                imgSubmitHandler(
                  e,
                  editUserPic,
                  imgToPreview,
                  loggedUserData._id,
                  dispatch,
                  setUploadedImg
                )
              }
            >
              <FormParagraph>User Avatar:</FormParagraph>
              <FormFileInput
                name={"userPic"}
                accept={"image/*"}
                onChangeHandler={(e: React.ChangeEvent) =>
                  onChangePic(e, setImagePreview)
                }
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
        </UserDataContainer>
        <DesktopNav />
      </EditDataSection>
    </EditDataBackground>
  );
};

export default UserPanel;
