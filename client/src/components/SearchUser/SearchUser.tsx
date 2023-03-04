import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import closeImg from "../../images/cross-mark.png";
import TextFormInput from "../TextFormInput/TextFormInput";
import SubInput from "../SubmitInput/SubmitInput";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import UserHeader from "../UserHeader/UserHeader";
import { formSubmitHandler, changeHandler } from "./Service";
import { SearchUserProps } from "../../types/types";
import { IRootState, IAppUsers } from "../../interfaces/interfaces";
import {
  MobileSearchUserContainer,
  DesktopSearchUserContainer,
  Form,
  Img,
  SearchUserResult,
  FilteredUserContainer,
  UserHeaderContainer,
} from "./SearchUser.style";

const SearchUser = ({ hide, hideHandler }: SearchUserProps): JSX.Element => {
  const appUsers = useSelector((state: IRootState) => state.appData.appUsers);

  const [formValue, setFormValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [usersToShow, setUsersToShow] = useState<Array<IAppUsers>>([]);

  useEffect(() => setUsersToShow(appUsers), [appUsers]);

  return (
    <>
      <MobileSearchUserContainer hidden={hide}>
        <Img
          src={closeImg}
          onClick={() => {
            hideHandler(true);
            console.log(hide);
          }}
        />
        <Form
          onSubmit={(e: React.SyntheticEvent) =>
            formSubmitHandler(
              e,
              setLoading,
              formValue,
              appUsers,
              setUsersToShow
            )
          }
        >
          <TextFormInput
            type="text"
            placeholder="Search user"
            name="Search user"
            onChangeHandler={(e: React.ChangeEvent) =>
              changeHandler(e, setFormValue)
            }
            value={formValue}
            width={"70%"}
            height={"30px"}
          />
          <SubInput value={"Search user"} />
        </Form>
        <SearchUserResult>
          {(isLoading || appUsers === []) && <LoadingIcon />}
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
        <Img
          src={closeImg}
          onClick={() => {
            hideHandler(true);
            console.log(hide);
          }}
        />
        <Form
          onSubmit={(e: React.SyntheticEvent) =>
            formSubmitHandler(
              e,
              setLoading,
              formValue,
              appUsers,
              setUsersToShow
            )
          }
        >
          <TextFormInput
            type="text"
            placeholder="Search user"
            name="Search user"
            onChangeHandler={(e: React.ChangeEvent) =>
              changeHandler(e, setFormValue)
            }
            value={formValue}
            width={"70%"}
            height={"30px"}
          />
          <SubInput value={"Search user"} />
        </Form>
        <SearchUserResult>
          {(isLoading || appUsers === []) && <LoadingIcon />}
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
