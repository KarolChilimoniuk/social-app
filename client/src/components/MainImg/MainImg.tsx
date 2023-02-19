import ConnectionImg from "../../images/networking.png";
import { ImgContainer, Img } from "./MainImg.style";

const MainImg = (): JSX.Element => {
  return (
    <ImgContainer>
      <Img src={ConnectionImg} />
    </ImgContainer>
  );
};

export default MainImg;
