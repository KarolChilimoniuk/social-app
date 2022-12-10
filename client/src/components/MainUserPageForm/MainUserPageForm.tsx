import { useSelector } from "react-redux";
import TextArea from "../TextArea/TextArea";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import {
  IUserInitState,
  IRootState,
} from "../../services/interfaces/interfaces";
import { FormContainer, Form, InputContainer } from "./MainUserPageForm.style";

const MainUserPageForm = (): JSX.Element => {
  const userData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );
  return (
    <FormContainer>
      <Form>
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
            rows={20}
            cols={20}
          />
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default MainUserPageForm;
