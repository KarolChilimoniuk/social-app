import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  hideStatsModalHandler,
  statsModalLoadingStatus,
} from "../../actions/appDataAction";
import { fetchFilteredUser } from "../../services/api/userInfoPage";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import Pagination from "../../components/Pagination/Pagination";
import Thought from "../../components/Thought/Thought";
import UserProfileImg from "../../components/UserProfileImg/UserProfileImg";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import NoImgAvatar from "../../components/NoImgAvatar/NoImgAvatar";
import FollowUnfollow from "../../components/FollowUnfollow/FollowUnfollow";
import { fetchFollowed, fetchFollowers } from "../../services/api/followers";
import { IRootState, IFilteredUser } from "../../interfaces/interfaces";
import {
  NoThoughtsParagraph,
  LoadingContainer,
  UserAvatarContainer,
  UserInfoBackground,
  UserInfoPageContainer,
  UserMainInfo,
  UserMainDetails,
  UserMainDetailsHeader,
  UserDescriptionParagraph,
  UserMainDetailsParagraph,
  UserFollowingDetailsParagraph,
  UserFollowingDetailsSpan,
  UserPostsContainer,
  UserToShowContainer,
} from "./UserInfoPage.style";

const UserInfoPage = (): JSX.Element => {
  const idToFilterUser: string = useSelector(
    (state: IRootState) => state.appData.idToFilterUser
  );

  const loggedUserData = useSelector((state: IRootState) => state.userData);

  const dispatch: Dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState<IFilteredUser | null>(null);
  const [listOfFollowers, setListOfFollowers] = useState<Array<string> | null>(
    null
  );
  const [follwersAmount, setFollowersAmount] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if (idToFilterUser !== "") {
      fetchFilteredUser(idToFilterUser).then((res) => {
        setUserInfo(res);
        setListOfFollowers(res.followers);
        setFollowersAmount(res.followers.length);
      });
    }
  }, [idToFilterUser]);

  return (
    <UserInfoBackground>
      <UserInfoPageContainer>
        {userInfo === null && (
          <LoadingContainer>
            <LoadingIcon />
            <p>...Loading</p>
          </LoadingContainer>
        )}
        {userInfo !== null && (
          <UserToShowContainer>
            <UserMainInfo>
              {userInfo.pic ? (
                <UserAvatarContainer>
                  <UserProfileImg
                    imgId={userInfo.pic}
                    width={90}
                    height={90}
                    radius={50}
                  ></UserProfileImg>
                </UserAvatarContainer>
              ) : (
                <UserAvatarContainer>
                  <NoImgAvatar height={90} width={90} />
                </UserAvatarContainer>
              )}
              <UserMainDetails>
                <UserMainDetailsHeader>
                  {userInfo.firstName} {userInfo.lastName}
                </UserMainDetailsHeader>
                <UserMainDetailsParagraph>
                  @{userInfo.userName}
                  {userInfo._id !== loggedUserData._id && (
                    <FollowUnfollow
                      followersNumberHandler={setFollowersAmount}
                      userToShowId={userInfo._id}
                      userToShowFollowers={listOfFollowers}
                      listOfFollowersHandler={setListOfFollowers}
                    />
                  )}
                </UserMainDetailsParagraph>
                <UserFollowingDetailsParagraph>
                  Followers:{"  "}
                  <UserFollowingDetailsSpan
                    onClick={() => {
                      dispatch(statsModalLoadingStatus(true));
                      dispatch(hideStatsModalHandler(false));
                      fetchFollowers(userInfo._id, dispatch);
                    }}
                  >
                    {follwersAmount}
                  </UserFollowingDetailsSpan>
                  Followed:{"  "}
                  <UserFollowingDetailsSpan
                    onClick={() => {
                      dispatch(statsModalLoadingStatus(true));
                      dispatch(hideStatsModalHandler(false));
                      fetchFollowed(userInfo._id, dispatch);
                    }}
                  >
                    {userInfo.followed.length}
                  </UserFollowingDetailsSpan>
                  Thoughts:{"  "}
                  <UserFollowingDetailsSpan>
                    {userInfo.userPosts.length}
                  </UserFollowingDetailsSpan>
                </UserFollowingDetailsParagraph>
                <UserDescriptionParagraph>
                  {userInfo.description}
                </UserDescriptionParagraph>
              </UserMainDetails>
            </UserMainInfo>
            <UserPostsContainer>
              {userInfo?.userPosts.length === 0 && (
                <NoThoughtsParagraph>
                  Thoughts wall is empty
                </NoThoughtsParagraph>
              )}
              {userInfo.userPosts
                .filter(
                  (el, i) => i <= indexOfLastPost && i >= indexOfFirstPost
                )
                .map((thought: any, i) => (
                  <Thought
                    key={thought._id}
                    authorFirstName={thought.author.firstName}
                    authorLastName={thought.author.lastName}
                    authorPic={thought.author.pic}
                    date={new Date(thought.created).toDateString()}
                    content={thought.textContent}
                    likes={thought.likes.length}
                    likeStatus={
                      thought.likes.includes(loggedUserData._id) ? true : false
                    }
                    authorId={thought.author._id}
                    postId={thought._id}
                  />
                ))}
              {userInfo.userPosts.length !== 0 && (
                <Pagination
                  itemsPerPage={postsPerPage}
                  totalItems={userInfo.userPosts.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </UserPostsContainer>
          </UserToShowContainer>
        )}
        <DesktopNav />
      </UserInfoPageContainer>
    </UserInfoBackground>
  );
};

export default UserInfoPage;
