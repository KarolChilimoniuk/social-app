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
