import { useState } from "react";
import { UserNavDropdownProps } from "../../services/types/types";
import DropDownImg from "../../images/dropdown.png";
import {
  NavDropdownContainer,
  UserNavButton,
  UserNavHeader,
  UserNavImg,
  UserNavMenu,
} from "./UserNavDropdown.style";
import styles from "./UserNavDropdown.module.scss";

const UserNavDropdown = ({ userName }: UserNavDropdownProps): JSX.Element => {
  const [showMenu, menuHandler] = useState<boolean>(false);

  return (
    <NavDropdownContainer>
      <UserNavButton onClick={() => menuHandler(!showMenu)}>
        <UserNavHeader>{userName}</UserNavHeader>
        <UserNavImg src={DropDownImg}></UserNavImg>
      </UserNavButton>
      <UserNavMenu className={showMenu ? styles.activeUserMenu : undefined}>
        <p>fdgfdg</p>
      </UserNavMenu>
    </NavDropdownContainer>
  );
};

export default UserNavDropdown;
