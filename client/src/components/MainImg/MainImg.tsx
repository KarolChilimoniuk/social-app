import ConnectionImg from "../../images/networking.png";
import { ImgContainer, SocialImg } from "./MainImg.style";

const MainImg = (): JSX.Element => {
  return (
    <ImgContainer>
      <SocialImg src={ConnectionImg} />
    </ImgContainer>
  );
};

export default MainImg;
