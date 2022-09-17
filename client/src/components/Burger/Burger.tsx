import { useState } from "react";
import { BurgerBarProps } from "../../services/types/types";
import { BurgerContainer, Bar1, Bar2, Bar3 } from "./Burger.style";
import styles from "./Burger.module.scss";

const Burger = ({ onClickNavHandler }: BurgerBarProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const activeBarHandler = (): void => {
    setActive(!active);
  };
  return (
    <BurgerContainer
      onClick={() => {
        activeBarHandler();
        onClickNavHandler();
      }}
    >
      <Bar1 className={active === true ? styles.activeBar1 : undefined} />
      <Bar2 className={active === true ? styles.activeBar2 : undefined} />
      <Bar3 className={active === true ? styles.activeBar3 : undefined} />
    </BurgerContainer>
  );
};

export default Burger;
