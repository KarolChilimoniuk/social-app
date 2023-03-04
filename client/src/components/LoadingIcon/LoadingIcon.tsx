import loadingImg from "../../images/loading.png";
import { Img } from "./LoadingIcon.style";

const LoadingIcon = (): JSX.Element => {
  return (
    <>
      <Img src={loadingImg} />
    </>
  );
};

export default LoadingIcon;
