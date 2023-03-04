export interface IRootState {
  appData: IAppMainDataState;
  userData: IUserDataState;
}

export interface IUserDataState {
  authError: string;
  logged: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  eMail: string;
  birthDate: Date;
  registerDate: Date;
  chats: Array<string>;
  allPostsToShow: Array<IThought>;
  userPosts: Array<IThought>;
  followed: Array<string>;
  followers: Array<string>;
  groups: Array<string>;
  pic: string;
}

export interface IUserInfo {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  eMail: string;
  birthDate: string;
  registerDate: string;
  pic: string;
  chats: Array<string>;
  allPostsToShow: Array<IThought>;
  userPosts: Array<IThought>;
  followed: Array<string>;
  followers: Array<String>;
  groups: Array<string>;
}

export interface IAppUsers {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  pic: string;
}

export interface IAppMainDataState {
  hasAccount: boolean;
  idToFilterUser: string;
  appUsers: Array<IAppUsers>;
}

export interface IFormData {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatedPassword: string;
  birthDate: string;
  email: string;
}

export interface IUserPic {
  userPic: string | undefined;
}

export interface IThought {
  _id: string;
  textContent: string;
  likes: Array<string>;
  comments: Array<IComment>;
  shares: number;
  created: Date;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
    pic: string;
  };
}

export interface IThoughtAuthor {
  author: {
    id: string;
    firstName: string;
    lastName: string;
    userPic: string;
  };
}

export interface IComment {
  _id: string;
  author: {
    _id: string;
  };
  content: string;
  date: Date;
}

export interface IFilteredUser {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  eMail: string;
  birthDate: string;
  registerDate: string;
  pic: string;
  userPosts: Array<IThought>;
  // followed: Array<IUserInfo>;
  // followers: Array<IUserInfo>;
  followed: Array<string>;
  followers: Array<string>;
}
