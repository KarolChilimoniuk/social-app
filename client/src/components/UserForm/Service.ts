import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { IFormData } from "../../interfaces/interfaces";

export const registerHandler = (
  e: React.SyntheticEvent,
  loadingHandler: Function,
  signUp: Function,
  formData: IFormData,
  dispatch: Dispatch,
  navigate: NavigateFunction
): void => {
  loadingHandler(true);
  e.preventDefault();
  signUp(formData, dispatch, navigate, loadingHandler);
};

export const loginHandler = (
  e: React.SyntheticEvent,
  loadingHandler: Function,
  formData: IFormData,
  dispatch: Dispatch,
  navigate: NavigateFunction,
  login: Function
): void => {
  loadingHandler(true);
  e.preventDefault();
  login(formData, dispatch, navigate, loadingHandler);
};

export const onChangeHandler = (
  e: React.SyntheticEvent,
  newFormData: Function,
  formData: IFormData
): void => {
  const target = e.target as HTMLTextAreaElement;
  newFormData({ ...formData, [target.name]: target.value });
};

export const switcherHandler = (
  hasAccountHandler: Function,
  dispatch: Dispatch,
  clearAuthError: Function
) => {
  dispatch(hasAccountHandler());
  dispatch(clearAuthError());
};
