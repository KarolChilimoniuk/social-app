import { AnyAction } from "redux";
import { IInitState } from "../interfaces/interfaces";

const initialState: IInitState = {
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
    case "LOGIN":
      return {
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
    default:
      return { ...state };
  }
};

export default userReducers;
