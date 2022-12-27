import { useState } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, NavigateFunction } from "react-router-dom";
import { logoutUser } from "../../services/api/auth";
import { UserNavDropdownProps } from "../../services/types/types";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import {
  IRootState,
  IUserInitState,
} from "../../services/interfaces/interfaces";
import DropDownImg from "../../images/dropdown.png";
import {
  LogoutButton,
  NavDropdownContainer,
  UserNavButton,
  UserNavImg,
  UserNavMenu,
} from "./UserNavDropdown.style";
import styles from "./UserNavDropdown.module.scss";

const UserNavDropdown = ({ userName }: UserNavDropdownProps): JSX.Element => {
  const userData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );

  const dispatch: Dispatch = useDispatch();

  const navigate: NavigateFunction = useNavigate();

  const [showMenu, menuHandler] = useState<boolean>(false);

  return (
    <NavDropdownContainer>
      <UserNavButton onClick={() => menuHandler(!showMenu)}>
        {typeof userData.pic === "string" && userData.pic !== "" ? (
          <UserProfileImg
            imgId={userData.pic}
            width={40}
            height={40}
            radius={30}
          />
        ) : (
          <NoImgAvatar />
        )}
        <UserNavImg src={DropDownImg}></UserNavImg>
      </UserNavButton>
      <UserNavMenu className={showMenu ? styles.activeUserMenu : undefined}>
        <NavLink to="/editUser" className={styles.userNavLink}>
          Edit profile
        </NavLink>
        <LogoutButton
          onClick={() => {
            logoutUser(dispatch, navigate);
            console.log(userData);
          }}
        >
          logout
        </LogoutButton>
      </UserNavMenu>
    </NavDropdownContainer>
  );
};

export default UserNavDropdown;
