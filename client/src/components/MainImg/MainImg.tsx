import ConnectionImg from "../../images/networking.png";
import { MainImgContainer, Img } from "./MainImg.style";

const MainImg = (): JSX.Element => {
  return (
    <MainImgContainer>
      <Img src={ConnectionImg} />
    </MainImgContainer>
  );
};

export default MainImg;
