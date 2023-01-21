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
  allPostsToShow: [],
  userPosts: [],
  friendsList: [],
  groups: [],
  pic: "",
};

const userReducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "CLEAR_AUTH_ERROR":
      return { ...state, authError: "" };
    case "LOGIN_SUCCESS":
      return {
        authError: "",
        logged: true,
        _id: action.payloads._id,
        firstName: action.payloads.firstName,
        lastName: action.payloads.lastName,
        userName: action.payloads.userName,
        eMail: action.payloads.eMail,
        birthDate: action.payloads.birthDate,
        registerDate: action.payloads.registerDate,
        chats: action.payloads.chats,
        allPostsToShow: action.payloads.allPostsToShow,
        userPosts: action.payloads.userPosts,
        friendsList: action.payloads.friendsList,
        groups: action.payloads.groups,
        pic: action.payloads.pic,
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
    case "UPDATE_USER_DATA_SUCCESS":
      return {
        authError: "",
        logged: true,
        _id: action.payloads._id,
        firstName: action.payloads.firstName,
        lastName: action.payloads.lastName,
        userName: action.payloads.userName,
        eMail: action.payloads.eMail,
        birthDate: action.payloads.birthDate,
        registerDate: action.payloads.registerDate,
        chats: action.payloads.chats,
        allPostsToShow: action.payloads.allPostsToShow,
        userPosts: action.payloads.userPosts,
        friendsList: action.payloads.friendsList,
        groups: action.payloads.groups,
        pic: action.payloads.pic,
      };
    case "UPDATE_USER_DATA_FAILURE":
      return {
        ...state,
        authError: action.payloads,
      };

    case "UPDATE_USER_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payloads,
      };
    case "UPDATE_USER_POSTS_FAILURE":
      return {
        ...state,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};

export default userReducers;
