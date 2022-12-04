import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  UserNavDropdownProps,
  UserProfilePic,
} from "../../services/types/types";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import {
  IRootState,
  IUserInitState,
} from "../../services/interfaces/interfaces";
import DropDownImg from "../../images/dropdown.png";
import User from "../../images/user.png";
import {
  NavDropdownContainer,
  UserNavButton,
  UserNavHeader,
  UserNavImg,
  UserImg,
  UserNavMenu,
} from "./UserNavDropdown.style";
import styles from "./UserNavDropdown.module.scss";

const UserNavDropdown = ({ userName }: UserNavDropdownProps): JSX.Element => {
  const userData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );

  const [showMenu, menuHandler] = useState<boolean>(false);

  return (
    <NavDropdownContainer>
      <UserNavButton onClick={() => menuHandler(!showMenu)}>
        {/* <UserNavHeader>{userName}</UserNavHeader> */}
        {typeof userData.pic === "string" && userData.pic !== "" ? (
          <UserProfileImg
            imgId={userData.pic}
            width={30}
            height={30}
            radius={30}
          />
        ) : (
          <UserImg src={User} />
        )}
        <UserNavImg src={DropDownImg}></UserNavImg>
      </UserNavButton>
      <UserNavMenu className={showMenu ? styles.activeUserMenu : undefined}>
        <NavLink to="/user" className={styles.userNavLink}>
          User profile
        </NavLink>
      </UserNavMenu>
    </NavDropdownContainer>
  );
};

export default UserNavDropdown;
