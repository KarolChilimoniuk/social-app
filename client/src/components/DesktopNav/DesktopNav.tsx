import { useSelector } from "react-redux";
import HomeIcon from "../../images/home.png";
import NewsIcon from "../../images/news.png";
import UserHeader from "../UserHeader/UserHeader";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import {
  DesktopNavContainer,
  UserFollowingInfo,
  UserFollowingParagraph,
  UserFollowingSpan,
  UserInfoDetails,
  LoggedUserInfo,
  MenuList,
  NavLi,
  MenuNav,
  Link,
  NavImg,
} from "./DesktopNav.style";

const UserDesktopNav = (): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  return (
    <DesktopNavContainer>
      <LoggedUserInfo>
        {typeof loggedUserData.pic === "string" && loggedUserData.pic !== "" ? (
          <UserProfileImg
            imgId={loggedUserData.pic}
            width={80}
            height={80}
            radius={65}
          />
        ) : (
          <NoImgAvatar />
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
        </MenuList>
      </MenuNav>
    </DesktopNavContainer>
  );
};

export default UserDesktopNav;
