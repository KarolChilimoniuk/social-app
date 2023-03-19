import React from "react";
import rootReducer from "../reducers";
import {
  IAppUsers,
  IComment,
  IThought,
  IUserInfo,
  IPostWithCommentsContent,
} from "../interfaces/interfaces";

export type RootState = ReturnType<typeof rootReducer>;

export type HasAccountAction = {
  type: string;
  payloads: boolean;
};

export type SetIdToFilterUserAction = {
  type: string;
  payloads: string;
};

export type LoginAction = {
  type: string;
  payloads: IUserInfo | string | unknown;
};

export type SignupAction = {
  type: string;
  payloads: string | unknown;
};

export type ClearAuthAction = {
  type: string;
};

export type UpdateUserInfoAction = {
  type: string;
  payloads: IUserInfo | string | unknown;
};

export type UpdateUserPostsAction = {
  type: string;
  payloads: IUserInfo | string | unknown;
};

export type FetchAppUsersAction = {
  type: string;
  payloads: Array<IAppUsers>;
};

export type StatsModalAction = {
  type: string;
  payloads: boolean | Array<IAppUsers>;
};

export type CommentsModalAction = {
  type: string;
  payloads: boolean | IPostWithCommentsContent | null;
};

export type UserFormProps = {
  loadingHandler: Function;
};

export type FollowUnfollowAction = {
  type: string;
  payloads: { listOfFollowed: Array<string>; allPostsToShow: Array<IThought> };
};

export type LogoutAction = {
  type: string;
};

export type LoginFormTemplateProps = {
  loadingHandler: Function;
  loginHandler(e: React.SyntheticEvent): void;
  onChangeHandler(e: React.SyntheticEvent): void;
  email: string;
  password: string;
};

export type GoogleLoginProps = {
  loadingHandler: Function;
};

export type RegisterFormTemplProps = {
  registerHandler(e: React.SyntheticEvent): void;
  onChangeHandler(e: React.SyntheticEvent): void;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatedPassword: string;
  birthDate: string;
  email: string;
};

export type InputProps = {
  onChangeHandler?(e: React.SyntheticEvent): void;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: string;
  accept?: string;
  enctype?: string;
  width?: string;
  height?: string;
  rows?: string;
  cols?: string;
};

export type TextAreaProps = {
  onChangeHandler?(e: React.SyntheticEvent): void;
  placeholder?: string;
  name?: string;
  value?: string;
  width?: string;
  height?: string;
  rows?: number;
  cols?: number;
};

export type SwitcherProps = {
  accountStatus: boolean;
  onClickHandler?(e: React.SyntheticEvent): void;
};

export type UserBarProps = {
  NavHandler: () => void;
};

export type NavProps = {
  active: boolean;
};

export type BurgerBarProps = {
  onClickNavHandler: () => void;
};

export type UserNavDropdownProps = {
  userName: string;
};

export type UploadedUserImgProps = {
  imgId: string | undefined;
  width: number;
  height: number;
  radius: number;
};

export type ThoughtProps = {
  authorFirstName: string;
  authorLastName: string;
  authorId: string;
  authorPic: string;
  date: string;
  content: string;
  comments?: [IComment];
  likes?: number;
  likeStatus: boolean;
  postId: string;
};

export type LikesSectionProps = {
  likes: number | undefined;
  likeStatus: boolean;
  postId: string;
};

export type UserPic = File | null;

export type UserProfilePic = string | undefined;

export type ImgToPreview = string | ArrayBuffer | null;

export type UploadedImg = string;

export type NoImgAvatarProps = {
  height: number;
  width: number;
};

export type UserHeaderProps = {
  name: string;
  lastName: string;
  userId: string;
};

export type FollowUnfollowProps = {
  userToShowId: string;
  userToShowFollowers: Array<string> | null;
  listOfFollowersHandler: Function;
  followersNumberHandler: Function;
};

export type SearchUserProps = {
  hide: boolean;
  hideHandler: Function;
};

export type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: Function;
};
