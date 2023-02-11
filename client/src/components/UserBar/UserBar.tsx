import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState, IUserDataState } from "../../interfaces/interfaces";
import Burger from "../Burger/Burger";
import UserNavDropdown from "../UserNavDropdown/UserNavDropdown";
import { UserBarProps } from "../../types/types";
import { BarContainer1, BarParagraph } from "./UserBar.style";

const UserBar = ({ NavHandler }: UserBarProps): JSX.Element => {
  const userData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <BarContainer1
      color={scroll > 3 ? "rgba(180, 180, 180, 1)" : "rgb(43,88,114)"}
    >
      <Burger onClickNavHandler={() => NavHandler()} />
      <BarParagraph>Welcome</BarParagraph>
      {/* <p>{userData.pic}</p> */}

      <UserNavDropdown userName={userData.firstName} />
    </BarContainer1>
  );
};

export default UserBar;
