import ErrorImg from "../../images/404-error.png";
import { Img, PageContainer, Paragraph } from "./404.style";

const ErrorPage = (): JSX.Element => {
  return (
    <PageContainer>
      <Paragraph>Page not found</Paragraph>
      <Img src={ErrorImg} />
    </PageContainer>
  );
};

export default ErrorPage;
