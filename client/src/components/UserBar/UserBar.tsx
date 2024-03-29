import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState, IUserDataState } from "../../interfaces/interfaces";
import Burger from "../Burger/Burger";
import UserNavDropdown from "../UserNavDropdown/UserNavDropdown";
import { UserBarProps } from "../../types/types";
import { BarContainer, Paragraph } from "./UserBar.style";

const UserBar = ({ NavHandler }: UserBarProps): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <BarContainer color={scroll > 3 ? "rgb(85,121,142)" : "rgb(43,88,114)"}>
      <Burger onClickNavHandler={NavHandler} />
      <Paragraph>Welcome</Paragraph>
      <UserNavDropdown userName={loggedUserData.firstName} />
    </BarContainer>
  );
};

export default UserBar;
