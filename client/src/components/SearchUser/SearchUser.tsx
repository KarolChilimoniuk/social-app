import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import loadingImg from "../../images/loading.png";
import closeImg from "../../images/cross-mark.png";
import TextFormInput from "../TextFormInput/TextFormInput";
import SubInput from "../SubmitInput/SubmitInput";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import UserHeader from "../UserHeader/UserHeader";
import { SearchUserProps } from "../../types/types";
import { IRootState, IAppUsers } from "../../interfaces/interfaces";
import {
  MobileSearchUserContainer,
  DesktopSearchUserContainer,
  LoadingImg,
  SearchUserForm,
  SearchUserImg,
  SearchUserResult,
  FilteredUserContainer,
  UserHeaderContainer,
} from "./SearchUser.style";

const SearchUser = ({ hide, hideHandler }: SearchUserProps): JSX.Element => {
  const appUsers = useSelector((state: IRootState) => state.appData.appUsers);

  const [formValue, setFormValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [usersToShow, setUsersToShow] = useState<Array<IAppUsers>>([]);

  const onChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setFormValue(target.value);
  };

  const formSubmitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    if (formValue !== "") {
      const filteredUsers = appUsers.filter((user: IAppUsers) => {
        if (
          user.firstName.toLowerCase().includes(formValue) ||
          user.lastName.toLowerCase().includes(formValue) ||
          user.userName.toLowerCase().includes(formValue)
        ) {
          return user;
        }
      });
      setUsersToShow(filteredUsers);
    }
    if (formValue === "") {
      setUsersToShow(appUsers);
    }
    setLoading(false);
  };

  useEffect(() => setUsersToShow(appUsers), [appUsers]);

  return (
    <>
      <MobileSearchUserContainer hidden={hide}>
        <SearchUserImg
          src={closeImg}
          onClick={() => {
            hideHandler(true);
            console.log(hide);
          }}
        />
        <SearchUserForm onSubmit={formSubmitHandler}>
          <TextFormInput
            type="text"
            placeholder="Search user"
            name="Search user"
            onChangeHandler={onChangeHandler}
            value={formValue}
            width={"70%"}
            height={"30px"}
          />
          <SubInput value={"Search user"} />
        </SearchUserForm>
        <SearchUserResult>
          {isLoading && <LoadingImg src={loadingImg} />}
          {!isLoading &&
            appUsers.length > 0 &&
            usersToShow.map((user: IAppUsers) => (
              <FilteredUserContainer key={user._id}>
                {user.pic !== "" ? (
                  <UserProfileImg
                    imgId={user.pic}
                    width={80}
                    height={80}
                    radius={50}
                  />
                ) : (
                  <NoImgAvatar height={80} width={80} />
                )}
                <UserHeaderContainer>
                  <UserHeader
                    userId={user._id}
                    name={user.firstName}
                    lastName={user.lastName}
                  />
                </UserHeaderContainer>
              </FilteredUserContainer>
            ))}
        </SearchUserResult>
      </MobileSearchUserContainer>
      <DesktopSearchUserContainer hidden={hide}>
        <SearchUserImg
          src={closeImg}
          onClick={() => {
            hideHandler(true);
            console.log(hide);
          }}
        />
        <SearchUserForm onSubmit={formSubmitHandler}>
          <TextFormInput
            type="text"
            placeholder="Search user"
            name="Search user"
            onChangeHandler={onChangeHandler}
            value={formValue}
            width={"70%"}
            height={"30px"}
          />
          <SubInput value={"Search user"} />
        </SearchUserForm>
        <SearchUserResult>
          {isLoading && <LoadingImg src={loadingImg} />}
          {!isLoading &&
            appUsers.length > 0 &&
            usersToShow.map((user: IAppUsers) => (
              <FilteredUserContainer key={user._id}>
                {user.pic !== "" ? (
                  <UserProfileImg
                    imgId={user.pic}
                    width={80}
                    height={80}
                    radius={50}
                  />
                ) : (
                  <NoImgAvatar height={80} width={80} />
                )}
                <UserHeaderContainer>
                  <UserHeader
                    userId={user._id}
                    name={user.firstName}
                    lastName={user.lastName}
                  />
                </UserHeaderContainer>
              </FilteredUserContainer>
            ))}
        </SearchUserResult>
      </DesktopSearchUserContainer>
    </>
  );
};

export default SearchUser;
