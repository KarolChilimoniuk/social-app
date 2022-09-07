import { useState } from "react";
import UserBar from "../../components/UserBar/UserBar";
import Navigation from "../../components/Navigation/Navigation";

const MainUserPage = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  return (
    <section>
      <Navigation active={activeNav} />
      <UserBar NavHandler={() => setActiveNav(!activeNav)} />
      <div>
        <p>user logged</p>
      </div>
    </section>
  );
};

export default MainUserPage;
