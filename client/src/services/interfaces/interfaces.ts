export interface IInitState {
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

export interface IFormData {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatedPassword: string;
  birthDate: string;
  email: string;
}
