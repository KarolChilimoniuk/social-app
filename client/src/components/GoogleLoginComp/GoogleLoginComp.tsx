import { GoogleLogin } from "@react-oauth/google";
import { loginByGoogle } from "../../services/api/auth";

const GoogleLoginComp = (): JSX.Element => {
  const successResponseGoogle = async (response: any): Promise<void> => {
    try {
      console.log("Google authentication completed");
      const googleData = await Object.assign({}, response);
      googleData && (await loginByGoogle(googleData));
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
        size="medium"
      />
    </>
  );
};

export default GoogleLoginComp;
