import { useSelector } from "react-redux";
import UserHeader from "../UserHeader/UserHeader";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
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
  Link,
  LoggedUserInfoContainer,
  UserMainInfoContainer,
  UserFollowingInfo,
  UserFollowingParagraph,
  UserFollowingSpan,
} from "./MobileNav.style";

const MobileNav = ({ active }: NavProps): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  return (
    <MobileNavContainer
      className={active === true ? styles.activeNav : undefined}
    >
      <LoggedUserInfoContainer>
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
        </MenuList>
      </MenuNav>
    </MobileNavContainer>
  );
};

export default MobileNav;
