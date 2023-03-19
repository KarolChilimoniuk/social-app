import { Dispatch } from "Redux";
import { NavigateFunction } from "react-router-dom";

export const successResponseGoogle = async (
  response: any,
  loginByGoogle: Function,
  dispatch: Dispatch,
  navigate: NavigateFunction,
  loadingHandler: Function
): Promise<void> => {
  try {
    const googleData = await Object.assign({}, response);
    googleData && (await loginByGoogle(googleData, dispatch, navigate));
    loadingHandler(false);
  } catch (error) {
    console.error(error);
    loadingHandler(false);
  }
};

export const failureResponseGoogle = (loadingHandler: Function): void => {
  console.error("Google authentication failed");
  loadingHandler(false);
};
