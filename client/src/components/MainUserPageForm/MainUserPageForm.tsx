import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "../TextArea/TextArea";
import SubInput from "../SubmitInput/SubmitInput";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import { addThought } from "../../services/api/userMainPage";
import { userThoughts, changeThoughtValue } from "./service";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import {
  FormContainer,
  Form,
  InputContainer,
  SubmitContainer,
} from "./MainUserPageForm.style";
import React from "react";

const MainUserPageForm = (): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const dispatch: Dispatch = useDispatch();

  const [thoughtContent, newThoughtContent] = useState<string>("");

  return (
    <FormContainer>
      <Form
        onSubmit={(e: React.SyntheticEvent) =>
          userThoughts(
            e,
            thoughtContent,
            addThought,
            loggedUserData.eMail,
            dispatch
          )
        }
      >
        <InputContainer>
          {typeof loggedUserData.pic === "string" &&
          loggedUserData.pic !== "" ? (
            <UserProfileImg
              imgId={loggedUserData.pic}
              width={40}
              height={40}
              radius={30}
            />
          ) : (
            <NoImgAvatar height={40} width={40} />
          )}
          <TextArea
            placeholder="What's in your head..."
            name="thoughts"
            width={"60%"}
            rows={5}
            cols={3}
            value={thoughtContent}
            onChangeHandler={(e: React.SyntheticEvent) =>
              changeThoughtValue(e, newThoughtContent)
            }
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
