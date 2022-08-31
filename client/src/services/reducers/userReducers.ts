import { AnyAction } from "redux";
import { IUserInitState } from "../interfaces/interfaces";

const initialState: IUserInitState = {
  authError: "",
  logged: false,
  _id: "",
  firstName: "",
  lastName: "",
  userName: "",
  eMail: "",
  birthDate: new Date(),
  registerDate: new Date(),
  chats: [],
  posts: [],
  friendsList: [],
  groups: [],
};

const userReducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "CLEAR_AUTH_ERROR":
      return { ...state, authError: "" };
    case "LOGIN_SUCCESS":
      return {
        authError: action.payloads.error,
        logged: true,
        _id: action.payloads._id,
        firstName: action.payloads.firstName,
        lastName: action.payloads.lastName,
        userName: action.payloads.userName,
        eMail: action.payloads.eMail,
        birthDate: action.payloads.birthDate,
        registerDate: action.payloads.registerDate,
        chats: action.payloads.chats,
        posts: action.payloads.posts,
        friendsList: action.payloads.friendList,
        groups: action.payloads.groups,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        authError: action.payloads,
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        authError: action.payloads,
      };
    case "LOGOUT":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default userReducers;
