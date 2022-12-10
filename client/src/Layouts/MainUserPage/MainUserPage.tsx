import { useState } from "react";
import MainUserPageForm from "../../components/MainUserPageForm/MainUserPageForm";
import { MainPageContainer } from "./MainUserPage.style";

const MainUserPage = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  return (
    <MainPageContainer>
      <MainUserPageForm />
    </MainPageContainer>
  );
};

export default MainUserPage;
