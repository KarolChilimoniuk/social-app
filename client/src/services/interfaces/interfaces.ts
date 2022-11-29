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
  posts: Array<string>;
  friendsList: Array<string>;
  groups: Array<string>;
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
  // userPic?: File | null;
}

export interface IUserPic {
  userPic: File | null;
}
