import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/api/auth";
import {
  IRootState,
  IUserInitState,
} from "../../services/interfaces/interfaces";
import Burger from "../Burger/Burger";
import UserNavDropdown from "../UserNavDropdown/UserNavDropdown";
import { UserBarProps } from "../../services/types/types";
import { BarContainer1, BarParagraph, BarButton } from "./UserBar.style";
import styles from "./UserBar.module.scss";

const UserBar = ({ NavHandler }: UserBarProps): JSX.Element => {
  const [scroll, setScroll] = useState<number>(0);
  const dispatch: Dispatch = useDispatch();
  const userData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <BarContainer1 className={scroll >= 5 ? styles.scrolledBar : undefined}>
      <Burger onClickNavHandler={() => NavHandler()} />
      {/* <BarParagraph>Welcome</BarParagraph> */}
      <UserNavDropdown userName={userData.userName} />
      <BarButton
        onClick={() => {
          logoutUser(dispatch, navigate);
          console.log(userData);
        }}
      >
        logout
      </BarButton>
    </BarContainer1>
  );
};

export default UserBar;
