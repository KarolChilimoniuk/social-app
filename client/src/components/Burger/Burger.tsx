import { useState } from "react";
import { BurgerBarProps } from "../../types/types";
import { activeBarHandler } from "./service";
import { BurgerContainer, Bar1, Bar2, Bar3 } from "./Burger.style";
import styles from "./Burger.module.scss";

const Burger = ({ onClickNavHandler }: BurgerBarProps): JSX.Element => {
  const [activeStatus, setActiveStatus] = useState<boolean>(false);

  return (
    <BurgerContainer
      onClick={() => {
        onClickNavHandler();
        activeBarHandler(activeStatus, setActiveStatus);
      }}
    >
      <Bar1 className={activeStatus ? styles.activeBar1 : undefined} />
      <Bar2 className={activeStatus ? styles.activeBar2 : undefined} />
      <Bar3 className={activeStatus ? styles.activeBar3 : undefined} />
    </BurgerContainer>
  );
};

export default Burger;
