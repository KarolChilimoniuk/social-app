import { NavContainer, MenuNav, MenuList, NavLi } from "./Navigation.style";
import { NavProps } from "../../types/types";
import styles from "./Navigation.module.scss";

const Navigation = ({ active }: NavProps): JSX.Element => {
  return (
    <NavContainer className={active === true ? styles.activeNav : undefined}>
      <MenuNav>
        <MenuList>
          <NavLi>Board</NavLi>
          <NavLi>Friends</NavLi>
          <NavLi>Chat</NavLi>
        </MenuList>
      </MenuNav>
    </NavContainer>
  );
};

export default Navigation;
