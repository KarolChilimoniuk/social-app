import NoImg from "../../images/user.png";
import { UserImg, UserImgContainer } from "./NoImgAvatar.style";

const NoImgAvatar = (): JSX.Element => {
  return (
    <UserImgContainer>
      <UserImg src={NoImg} />
    </UserImgContainer>
  );
};

export default NoImgAvatar;
