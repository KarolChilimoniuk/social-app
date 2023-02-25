import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFilteredUser } from "../../services/api/userInfoPage";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import Thought from "../../components/Thought/Thought";
import UserProfileImg from "../../components/UserProfileImg/UserProfileImg";
import NoImgAvatar from "../../components/NoImgAvatar/NoImgAvatar";
import FollowUnfollow from "../../components/FollowUnfollow/FollowUnfollow";
import { IRootState, IFilteredUser } from "../../interfaces/interfaces";
import {
  UserInfoPageContainer,
  UserMainInfo,
  UserMainDetails,
  UserMainDetailsHeader,
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

  const [userInfo, setUserInfo] = useState<IFilteredUser | null>(null);

  useEffect(() => {
    if (idToFilterUser !== "") {
      fetchFilteredUser(idToFilterUser).then((res) => setUserInfo(res));
    }
  }, [idToFilterUser]);

  return (
    <UserInfoPageContainer>
      {userInfo !== null && (
        <>
          <UserToShowContainer>
            <button
              onClick={() => {
                console.log(loggedUserData.followed);
              }}
            >
              sdsfds
            </button>
            <UserMainInfo>
              {userInfo.pic ? (
                <UserProfileImg
                  imgId={userInfo.pic}
                  width={90}
                  height={90}
                  radius={50}
                ></UserProfileImg>
              ) : (
                <NoImgAvatar />
              )}
              <UserMainDetails>
                <UserMainDetailsHeader>
                  {userInfo.firstName} {userInfo.lastName}
                </UserMainDetailsHeader>
                <UserMainDetailsParagraph>
                  @{userInfo.userName}
                  {userInfo._id !== loggedUserData._id && (
                    <FollowUnfollow
                      listOfFollowed={userInfo.followed}
                      loggedUserId={loggedUserData._id}
                      userToShowId={userInfo._id}
                    />
                  )}
                </UserMainDetailsParagraph>
                <UserFollowingDetailsParagraph>
                  Followers:{"  "}
                  <UserFollowingDetailsSpan>
                    {userInfo.followers.length}
                  </UserFollowingDetailsSpan>
                  Followed:{"  "}
                  <UserFollowingDetailsSpan>
                    {userInfo.followed.length}
                  </UserFollowingDetailsSpan>
                  Thoughts:{"  "}
                  <UserFollowingDetailsSpan>
                    {userInfo.userPosts.length}
                  </UserFollowingDetailsSpan>
                </UserFollowingDetailsParagraph>
              </UserMainDetails>
            </UserMainInfo>
            <UserPostsContainer>
              {userInfo.userPosts.map((thought: any) => (
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
            </UserPostsContainer>
          </UserToShowContainer>
          <DesktopNav />
        </>
      )}
    </UserInfoPageContainer>
  );
};

export default UserInfoPage;
