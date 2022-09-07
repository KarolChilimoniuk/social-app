import { NavContainer } from "./Navigation.style";
import { NavProps } from "../../services/types/types";
import styles from "./Navigation.module.scss";

const Navigation = ({ active }: NavProps): JSX.Element => {
  return (
    <NavContainer className={active === true ? styles.activeNav : undefined}>
      <nav>
        <ul>
          <li>Board</li>
          <li>Friends</li>
          <li>Chat</li>
        </ul>
      </nav>
    </NavContainer>
  );
};

export default Navigation;
