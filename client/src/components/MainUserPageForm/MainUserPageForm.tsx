import { useState } from "react";
import { useSelector } from "react-redux";
import TextArea from "../TextArea/TextArea";
import SubInput from "../SubmitInput/SubmitInput";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import { addThought } from "../../services/api/userMainPage";
import {
  IUserInitState,
  IRootState,
} from "../../services/interfaces/interfaces";
import {
  FormContainer,
  Form,
  InputContainer,
  SubmitContainer,
} from "./MainUserPageForm.style";
import React from "react";

const MainUserPageForm = (): JSX.Element => {
  const userData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );

  const [thoughtContent, newThoughtContent] = useState<string>("");

  const userThoughts = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLTextAreaElement;
    newThoughtContent(target.value);
    addThought(userData.eMail, thoughtContent);
    console.log("user Thoughts");
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
            cols={5}
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
