import GoogleLoginComp from "../GoogleLoginComp/GoogleLoginComp";
import { LoginFormTemplateProps } from "../../services/types/types";

const LoginFormTemplate = ({
  loginHandler,
  onChangeHandler,
  email,
  password,
}: LoginFormTemplateProps): JSX.Element => {
  return (
    <>
      <form onSubmit={loginHandler}>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </form>
      <GoogleLoginComp />
    </>
  );
};

export default LoginFormTemplate;
