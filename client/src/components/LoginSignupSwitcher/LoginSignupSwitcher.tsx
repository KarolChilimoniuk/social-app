import { SwitcherProps } from "../../types/types";
import { Switcher } from "./LoginSignupSwitcher.style";

const LoginSignupSwitcher = ({
  accountStatus,
  onClickHandler,
}: SwitcherProps): JSX.Element => {
  return (
    <Switcher onClick={onClickHandler}>
      {accountStatus
        ? "Don't you have an account? Sign up!"
        : "Do you have an account? Log in!"}
    </Switcher>
  );
};

export default LoginSignupSwitcher;
