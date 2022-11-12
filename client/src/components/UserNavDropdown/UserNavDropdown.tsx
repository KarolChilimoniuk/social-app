import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserNavDropdownProps } from "../../services/types/types";
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
  const [showMenu, menuHandler] = useState<boolean>(false);

  return (
    <NavDropdownContainer>
      <UserNavButton onClick={() => menuHandler(!showMenu)}>
        {/* <UserNavHeader>{userName}</UserNavHeader> */}
        <UserImg src={User} />
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
