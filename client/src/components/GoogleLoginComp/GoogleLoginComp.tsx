import { GoogleLogin } from "@react-oauth/google";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { failureResponseGoogle, successResponseGoogle } from "./Service";
import { loginByGoogle } from "../../services/api/auth";
import { GoogleLoginProps } from "../../types/types";

const GoogleLoginComp = ({ loadingHandler }: GoogleLoginProps): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <GoogleLogin
        onSuccess={(res) => {
          loadingHandler(true);
          successResponseGoogle(
            res,
            loginByGoogle,
            dispatch,
            navigate,
            loadingHandler
          );
        }}
        onError={() => {
          loadingHandler(true);
          failureResponseGoogle(loadingHandler);
        }}
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
