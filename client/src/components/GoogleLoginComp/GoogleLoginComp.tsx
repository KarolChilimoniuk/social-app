import { GoogleLogin } from "@react-oauth/google";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { loginByGoogle } from "../../services/api/auth";

const GoogleLoginComp = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const successResponseGoogle = async (response: any): Promise<void> => {
    try {
      console.log("Google authentication completed");
      const googleData = await Object.assign({}, response);
      googleData && (await loginByGoogle(googleData, dispatch, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  const failureResponseGoogle = (): void => {
    console.log("Google authentication failed");
  };

  return (
    <>
      <GoogleLogin
        onSuccess={successResponseGoogle}
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
