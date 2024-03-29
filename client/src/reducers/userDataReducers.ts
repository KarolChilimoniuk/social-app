import { AnyAction } from "redux";
import { IUserDataState } from "../interfaces/interfaces";

const initialState: IUserDataState = {
  authError: "",
  logged: false,
  _id: "",
  firstName: "",
  lastName: "",
  userName: "",
  eMail: "",
  description: "",
  birthDate: new Date(),
  registerDate: new Date(),
  chats: [],
  allPostsToShow: [],
  userPosts: [],
  followed: [],
  followers: [],
  groups: [],
  pic: "",
};

const userReducers = (
  state = initialState,
  action: AnyAction
): IUserDataState => {
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
        description: action.payloads.description,
        chats: action.payloads.chats,
        allPostsToShow: action.payloads.allPostsToShow,
        userPosts: action.payloads.userPosts,
        followed: action.payloads.followed,
        followers: action.payloads.followers,
        groups: action.payloads.groups,
        pic: action.payloads.pic,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        logged: false,
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
        description: action.payloads.description,
        chats: action.payloads.chats,
        allPostsToShow: action.payloads.allPostsToShow,
        userPosts: action.payloads.userPosts,
        followed: action.payloads.followed,
        followers: action.payloads.followers,
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
        allPostsToShow: action.payloads.allPostsToShow,
        userPosts: action.payloads.userPosts,
      };
    case "UPDATE_USER_POSTS_FAILURE":
      return {
        ...state,
      };
    case "FOLLOW":
      return {
        ...state,
        followed: action.payloads.listOfFollowed,
        allPostsToShow: action.payloads.allPostsToShow,
      };
    case "UNFOLLOW":
      return {
        ...state,
        followed: action.payloads.listOfFollowed,
        allPostsToShow: action.payloads.allPostsToShow,
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
