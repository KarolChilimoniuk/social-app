export interface IRootState {
  appData: IMainInitState;
  userData: IUserInitState;
}

export interface IUserInitState {
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
  posts: Array<IThought>;
  friendsList: Array<string>;
  groups: Array<string>;
  pic: string | undefined;
}

export interface IMainInitState {
  hasAccount: boolean;
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
  id: string;
  textContent: string;
  likes: Array<ILike>;
  comments: Array<IComment>;
  shares: number;
  created: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    userPic: string;
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
  id: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    img: string;
  };
  content: string;
  date: Date;
}

export interface ILike {
  id: string;
  author: {
    author: {
      id: string;
      firstName: string;
      lastName: string;
      img: string;
    };
  };
}
