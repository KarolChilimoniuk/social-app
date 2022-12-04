import { useState } from "react";
import { MainPageContainer } from "./MainUserPage.style";

const MainUserPage = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  return (
    <MainPageContainer>
      <div>
        <p>user logged</p>
      </div>
    </MainPageContainer>
  );
};

export default MainUserPage;
