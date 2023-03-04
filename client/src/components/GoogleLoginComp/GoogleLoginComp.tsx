import { GoogleLogin } from "@react-oauth/google";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { failureResponseGoogle, successResponseGoogle } from "./service";
import { loginByGoogle } from "../../services/api/auth";

const GoogleLoginComp = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <GoogleLogin
        onSuccess={(res) =>
          successResponseGoogle(res, loginByGoogle, dispatch, navigate)
        }
        onError={failureResponseGoogle}
        type="standard"
        auto_select={false}
        useOneTap={false}
        theme="filled_black"
        size="large"
      />
    </>
  );
};

export default GoogleLoginComp;
