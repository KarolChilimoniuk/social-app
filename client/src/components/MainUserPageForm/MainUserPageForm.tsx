import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "../TextArea/TextArea";
import SubInput from "../SubmitInput/SubmitInput";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import { addThought } from "../../services/api/userMainPage";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import {
  FormContainer,
  Form,
  InputContainer,
  SubmitContainer,
} from "./MainUserPageForm.style";
import React from "react";

const MainUserPageForm = (): JSX.Element => {
  const userData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const dispatch: Dispatch = useDispatch();

  const [thoughtContent, newThoughtContent] = useState<string>("");

  const userThoughts = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (thoughtContent === "") {
      alert("Your thought is empty :/ Write something.");
    }
    if (thoughtContent !== "") {
      addThought(userData.eMail, thoughtContent, dispatch);
    }
  };

  const changeThoughtValue = async (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLTextAreaElement;
    newThoughtContent(target.value);
  };

  return (
    <FormContainer>
      <Form onSubmit={userThoughts}>
        <InputContainer>
          {typeof userData.pic === "string" && userData.pic !== "" ? (
            <UserProfileImg
              imgId={userData.pic}
              width={40}
              height={40}
              radius={30}
            />
          ) : (
            <NoImgAvatar />
          )}
          <TextArea
            placeholder="What's in your head..."
            name="thoughts"
            width={"60%"}
            rows={5}
            cols={3}
            value={thoughtContent}
            onChangeHandler={changeThoughtValue}
          />
        </InputContainer>
        <SubmitContainer>
          <SubInput value={"Publish"} />
        </SubmitContainer>
      </Form>
    </FormContainer>
  );
};

export default MainUserPageForm;
