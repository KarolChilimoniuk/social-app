import { useState } from "react";
import { useSelector } from "react-redux";
import HomeIcon from "../../images/home.png";
import NewsIcon from "../../images/news.png";
import UserHeader from "../UserHeader/UserHeader";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import SearchIcon from "../../images/search.png";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import SearchUser from "../SearchUser/SearchUser";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import {
  DesktopNavContainer,
  UserAvatarContainer,
  UserFollowingInfo,
  UserFollowingParagraph,
  UserFollowingSpan,
  UserInfoDetails,
  LoggedUserInfo,
  MenuList,
  NavLi,
  MenuNav,
  NoLinkImgContainer,
  Link,
  NavImg,
} from "./DesktopNav.style";

const UserDesktopNav = (): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const [searchHide, setSearchHide] = useState<boolean>(true);

  return (
    <DesktopNavContainer>
      <SearchUser hide={searchHide} hideHandler={setSearchHide} />
      <LoggedUserInfo>
        {typeof loggedUserData.pic === "string" && loggedUserData.pic !== "" ? (
          <UserAvatarContainer>
            <UserProfileImg
              imgId={loggedUserData.pic}
              width={80}
              height={80}
              radius={65}
            />
          </UserAvatarContainer>
        ) : (
          <UserAvatarContainer>
            <NoImgAvatar height={80} width={80} />
          </UserAvatarContainer>
        )}
        <UserInfoDetails>
          <UserHeader
            name={loggedUserData.firstName}
            lastName={loggedUserData.lastName}
            userId={loggedUserData._id}
          />
          <UserFollowingInfo>
            <UserFollowingParagraph>
              Followers:{" "}
              <UserFollowingSpan>
                {loggedUserData.followers.length}
              </UserFollowingSpan>
            </UserFollowingParagraph>{" "}
            <UserFollowingParagraph>
              Followed:{" "}
              <UserFollowingSpan>
                {loggedUserData.followed.length}
              </UserFollowingSpan>{" "}
            </UserFollowingParagraph>
          </UserFollowingInfo>
        </UserInfoDetails>
      </LoggedUserInfo>
      <MenuNav>
        <MenuList>
          <NavLi>
            <Link to="/logged">
              <NavImg src={HomeIcon} />
              Home
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/logged">
              <NavImg src={NewsIcon} />
              News
            </Link>
          </NavLi>
          <NavLi onClick={() => setSearchHide(false)}>
            <NoLinkImgContainer>
              <NavImg src={SearchIcon} />
              Search user
            </NoLinkImgContainer>
          </NavLi>
        </MenuList>
      </MenuNav>
    </DesktopNavContainer>
  );
};

export default UserDesktopNav;
