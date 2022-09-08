import { useState } from "react";

const MainUserPage = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  return (
    <section>
      <div>
        <p>user logged</p>
      </div>
    </section>
  );
};

export default MainUserPage;
