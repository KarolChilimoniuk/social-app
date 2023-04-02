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
  description: string;
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
  statsModalHideStatus: boolean;
  statsModalLoadingStatus: boolean;
  statsModalContent: Array<IAppUsers> | null;
  commentsModalHideStatus: boolean;
  commentsModalLoadingStatus: boolean;
  commentsModalContent: IPostWithCommentsContent | null;
}

export interface IAuthor {
  _id: string;
  firstName: string;
  lastName: string;
  pic: string;
}

export interface IComment {
  _id: string;
  author: IAuthor;
  content: string;
  created: string;
  responses: Array<string>;
  likes: Array<string>;
}

export interface ICommentResponse {
  _id: string;
  author: IAuthor;
  content: string;
  created: string;
  likes: Array<string>;
}

export interface IPostWithCommentsContent {
  _id: string;
  author: IAuthor;
  created: string;
  textContent: string;
  shares: number;
  likes: Array<string>;
  comments: Array<IComment>;
}

export interface IFormData {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  description?: string;
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
  author: IAuthor;
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
  description: string;
  userPosts: Array<IThought>;
  followed: Array<string>;
  followers: Array<string>;
}
