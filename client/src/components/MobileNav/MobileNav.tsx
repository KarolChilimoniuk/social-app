import { useState } from "react";
import { useSelector } from "react-redux";
import UserHeader from "../UserHeader/UserHeader";
import SearchUser from "../SearchUser/SearchUser";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import SearchIcon from "../../images/search.png";
import HomeIcon from "../../images/home.png";
import NewsIcon from "../../images/news.png";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import { NavProps } from "../../types/types";
import styles from "./MobileNav.module.scss";
import {
  MobileNavContainer,
  MenuNav,
  MenuList,
  NavLi,
  NavImg,
  NoLinkImgContainer,
  Link,
  LoggedUserInfoContainer,
  UserAvatarContainer,
  UserMainInfoContainer,
  UserFollowingInfo,
  UserFollowingParagraph,
  UserFollowingSpan,
} from "./MobileNav.style";

const MobileNav = ({ active }: NavProps): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const [searchHide, setSearchHide] = useState<boolean>(true);

  return (
    <MobileNavContainer
      className={active === true ? styles.activeNav : undefined}
    >
      <SearchUser hide={searchHide} hideHandler={setSearchHide} />
      <LoggedUserInfoContainer>
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
        <UserMainInfoContainer>
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
            </UserFollowingParagraph>
            {""}
            <UserFollowingParagraph>
              Followed:{" "}
              <UserFollowingSpan>
                {loggedUserData.followed.length}
              </UserFollowingSpan>{" "}
            </UserFollowingParagraph>
          </UserFollowingInfo>
        </UserMainInfoContainer>
      </LoggedUserInfoContainer>
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
    </MobileNavContainer>
  );
};

export default MobileNav;
