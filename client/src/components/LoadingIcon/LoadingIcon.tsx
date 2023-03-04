import loadingImg from "../../images/loading.png";
import { LoadingImg } from "./LoadingIcon.style";

const LoadingIcon = (): JSX.Element => {
  return (
    <>
      <LoadingImg src={loadingImg} />
    </>
  );
};

export default LoadingIcon;
