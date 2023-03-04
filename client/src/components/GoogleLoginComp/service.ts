import { Dispatch } from "Redux";
import { NavigateFunction } from "react-router-dom";

export const successResponseGoogle = async (
  response: any,
  loginByGoogle: Function,
  dispatch: Dispatch,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    console.log("Google authentication completed");
    const googleData = await Object.assign({}, response);
    googleData && (await loginByGoogle(googleData, dispatch, navigate));
  } catch (error) {
    console.error(error);
  }
};

export const failureResponseGoogle = (): void => {
  console.error("Google authentication failed");
};
