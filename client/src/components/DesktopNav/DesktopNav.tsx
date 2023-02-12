import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../images/home.png";
import NewsIcon from "../../images/news.png";
import UserHeader from "../UserHeader/UserHeader";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import {
  DesktopNavContainer,
  UserFollowingInfo,
  UserFollowingSpan,
  MenuList,
  NavLi,
  MenuNav,
  NavImg,
} from "./DesktopNav.style";
import styles from "./DesktopNav.module.scss";

const UserDesktopNav = (): JSX.Element => {
  const userData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  return (
    <DesktopNavContainer>
      <UserHeader
        name={userData.firstName}
        lastName={userData.lastName}
        userId={userData._id}
      />
      <UserFollowingInfo>
        Followers{" "}
        <UserFollowingSpan>{userData.followers.length}</UserFollowingSpan> |{""}
        <UserFollowingSpan>{userData.followed.length}</UserFollowingSpan>{" "}
        Followed
      </UserFollowingInfo>
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
    </DesktopNavContainer>
  );
};

export default UserDesktopNav;
