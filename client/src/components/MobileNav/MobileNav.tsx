import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
  UserInfoContainer,
  UserMainInfoContainer,
  UserFollowingInfo,
  UserFollowingSpan,
} from "./MobileNav.style";

const MobileNav = ({ active }: NavProps): JSX.Element => {
  const userData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  return (
    <MobileNavContainer
      className={active === true ? styles.activeNav : undefined}
    >
      <UserInfoContainer>
        {typeof userData.pic === "string" && userData.pic !== "" ? (
          <UserProfileImg
            imgId={userData.pic}
            width={80}
            height={80}
            radius={65}
          />
        ) : (
          <NoImgAvatar />
        )}
        <UserMainInfoContainer>
          <UserHeader
            name={userData.firstName}
            lastName={userData.lastName}
            userId={userData._id}
          />
          <UserFollowingInfo>
            Followers{" "}
            <UserFollowingSpan>{userData.followers.length}</UserFollowingSpan> |
            {""}
            <UserFollowingSpan>
              {userData.followed.length}
            </UserFollowingSpan>{" "}
            Followed
          </UserFollowingInfo>
        </UserMainInfoContainer>
      </UserInfoContainer>
      <MenuNav>
        <MenuList>
          <NavLi>
            <NavLink to="/logged" className={styles.MobileNavLink}>
              <NavImg src={HomeIcon} />
              Home
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/logged" className={styles.MobileNavLink}>
              <NavImg src={NewsIcon} />
              News
            </NavLink>
          </NavLi>
        </MenuList>
      </MenuNav>
    </MobileNavContainer>
  );
};

export default MobileNav;
