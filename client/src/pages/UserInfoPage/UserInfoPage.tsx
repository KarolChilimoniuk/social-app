import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFilteredUser } from "../../services/api/userInfoPage";
import Thought from "../../components/Thought/Thought";
import UserProfileImg from "../../components/UserProfileImg/UserProfileImg";
import NoImgAvatar from "../../components/NoImgAvatar/NoImgAvatar";
import { IRootState, IFilteredUser } from "../../interfaces/interfaces";
import {
  UserInfoPageContainer,
  UserMainInfo,
  UserMainDetails,
  UserMainDetailsHeader,
  UserMainDetailsParagraph,
  UserFollowingDetail,
  UserPostsContainer,
} from "./UserInfoPage.style";

const UserInfoPage = (): JSX.Element => {
  const idToFilterUser: string = useSelector(
    (state: IRootState) => state.appData.idToFilterUser
  );
  const loggedUserId: string = useSelector(
    (state: IRootState) => state.userData._id
  );
  const [userInfo, setUserInfo] = useState<IFilteredUser | null>(null);

  useEffect(() => {
    if (idToFilterUser !== "") {
      fetchFilteredUser(idToFilterUser).then((res) => setUserInfo(res));
    }
  }, []);

  return (
    <UserInfoPageContainer>
      <button onClick={() => console.log(userInfo)}>...dd</button>
      {userInfo !== null && (
        <>
          <UserMainInfo>
            {userInfo.pic ? (
              <UserProfileImg
                imgId={userInfo.pic}
                width={77}
                height={77}
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
              </UserMainDetailsParagraph>
              <UserFollowingDetail>
                Followers: {userInfo.followers.length}
                {" | "}
                Followed: {userInfo.followed.length}
              </UserFollowingDetail>
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
                likeStatus={thought.likes.includes(loggedUserId) ? true : false}
                authorId={thought.author._id}
                postId={thought._id}
              />
            ))}
          </UserPostsContainer>
        </>
      )}
    </UserInfoPageContainer>
  );
};

export default UserInfoPage;
