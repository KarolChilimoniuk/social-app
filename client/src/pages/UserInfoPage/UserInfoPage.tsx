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
  UserAvatarContainer,
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
  const [follwersAmount, setFollowersAmount] = useState<number | null>(null);

  useEffect(() => {
    if (idToFilterUser !== "") {
      fetchFilteredUser(idToFilterUser).then((res) => {
        setUserInfo(res);
        setFollowersAmount(res.followers.length);
      });
    }
  }, [idToFilterUser]);

  return (
    <UserInfoPageContainer>
      {userInfo !== null && (
        <>
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
                      userToShowFollowers={userInfo.followers}
                    />
                  )}
                </UserMainDetailsParagraph>
                <UserFollowingDetailsParagraph>
                  Followers:{"  "}
                  <UserFollowingDetailsSpan>
                    {follwersAmount || 0}
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
