import NoImg from "../../images/user.png";
import { NoImgAvatarProps } from "../../types/types";
import { Img, UserImgContainer } from "./NoImgAvatar.style";

const NoImgAvatar = ({ height, width }: NoImgAvatarProps): JSX.Element => {
  return (
    <UserImgContainer style={{ width: width + "px", height: height + "px" }}>
      <Img src={NoImg} width={width / 2} />
    </UserImgContainer>
  );
};

export default NoImgAvatar;
