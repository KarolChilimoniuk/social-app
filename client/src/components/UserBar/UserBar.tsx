import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/api/auth";
import { IRootState } from "../../services/interfaces/interfaces";
import Burger from "../Burger/Burger";
import { BarContainer1, BarHeader, BarButton } from "./UserBar.style";
import styles from "./UserBar.module.scss";

const UserBar = () => {
  const [scroll, setScroll] = useState<number>(0);
  const dispatch = useDispatch();
  const userData = useSelector((state: IRootState) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
      console.log(scroll);
    });
  }, [scroll]);

  return (
    <BarContainer1 className={scroll >= 5 ? styles.scrolledBar : undefined}>
      <Burger />
      <BarHeader>{userData.userName}</BarHeader>
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
