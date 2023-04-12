import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  hideStatsModalHandler,
  statsModalLoadingStatus,
} from "../../actions/appDataAction";
import UserHeader from "../UserHeader/UserHeader";
import SearchUser from "../SearchUser/SearchUser";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import SearchIcon from "../../images/search.png";
import HomeIcon from "../../images/home.png";
import NewsIcon from "../../images/news.png";
import { fetchFollowed, fetchFollowers } from "../../services/api/followers";
import { IUserDataState, IRootState } from "../../interfaces/interfaces";
import { NavProps } from "../../types/types";
import styles from "./MobileNav.module.scss";
import {
  MobileNavContainer,
  Nav,
  List,
  Li,
  NavImg,
  NoLinkImgContainer,
  Link,
  LoggedUserInfoContainer,
  UserAvatarContainer,
  UserMainInfoContainer,
  UserFollowingInfo,
  Paragraph,
  Span,
} from "./MobileNav.style";

const MobileNav = ({ active }: NavProps): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  const dispatch: Dispatch = useDispatch();

  const [searchHide, setSearchHide] = useState<boolean>(true);

  return (
    <MobileNavContainer className={active ? styles.activeNav : undefined}>
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
            <Paragraph>
              Followers:{" "}
              <Span
                onClick={() => {
                  dispatch(statsModalLoadingStatus(true));
                  dispatch(hideStatsModalHandler(false));
                  fetchFollowers(loggedUserData._id, dispatch);
                }}
              >
                {loggedUserData.followers.length}
              </Span>
            </Paragraph>
            {""}
            <Paragraph>
              Followed:{" "}
              <Span
                onClick={() => {
                  dispatch(statsModalLoadingStatus(true));
                  dispatch(hideStatsModalHandler(false));
                  fetchFollowed(loggedUserData._id, dispatch);
                }}
              >
                {loggedUserData.followed.length}
              </Span>{" "}
            </Paragraph>
          </UserFollowingInfo>
        </UserMainInfoContainer>
      </LoggedUserInfoContainer>
      <Nav>
        <List>
          <Li>
            <Link to="/logged">
              <NavImg src={HomeIcon} />
              Home
            </Link>
          </Li>
          <Li>
            <Link to="/logged">
              <NavImg src={NewsIcon} />
              News
            </Link>
          </Li>
          <Li onClick={() => setSearchHide(false)}>
            <NoLinkImgContainer>
              <NavImg src={SearchIcon} />
              Search user
            </NoLinkImgContainer>
          </Li>
        </List>
      </Nav>
    </MobileNavContainer>
  );
};

export default MobileNav;
