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
  pic: string;
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
  _id: string;
  textContent: string;
  likes: Array<string>;
  comments: Array<IComment>;
  shares: number;
  created: Date;
  author: {
    _id: string;
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

// export interface ILike {
//   _id: string;
//   author: {
//     author: {
//       id: string;
//       firstName: string;
//       lastName: string;
//       img: string;
//     };
//   };
// }
