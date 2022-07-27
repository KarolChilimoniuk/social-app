import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
// import { GoogleLogin } from "react-google-login";

// const GoogleLoginComp = () => {
//   const successResponseGoogle = async (response: any) => {
//     try {
//       console.log("Google authentication completed");
//       console.log(response);
//     } catch (err) {
//       console.log("errrrrr");
//     }
//   };

//   const failureResponseGoogle = () => {
//     console.log("Google authentication failed");
//   };

//   useEffect(() => {
//     console.log(process.env.REACT_APP_GOOGLE_ID);
//   }, []);
//   return (
//     <GoogleLogin
//       clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
//       buttonText="Log in with Google"
//       onSuccess={successResponseGoogle}
//       onFailure={successResponseGoogle}
//       theme="dark"
//     />
//   );
//   // return <div>Google</div>;
// };

const GoogleLoginComp = (): JSX.Element => {
  const successResponseGoogle = async (response: any): Promise<void> => {
    try {
      console.log("Google authentication completed");
      console.log(response);
    } catch (err) {
      console.log("errrrrr");
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
      />
    </>
  );
};

export default GoogleLoginComp;
