import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MainUserPageForm from "../../components/MainUserPageForm/MainUserPageForm";
import Thought from "../../components/Thought/Thought";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserProfileImg from "../../components/UserProfileImg/UserProfileImg";
import NoImgAvatar from "../../components/NoImgAvatar/NoImgAvatar";
import { IRootState, IUserDataState } from "../../interfaces/interfaces";
import {
  MainPageContainer,
  ThoughtsContainer,
  UserInfoContainer,
  UserMainInfo,
  UserMainInfoHeader,
  UserMainDetails,
  UserFollowingInfo,
  UserFollowingSpan,
} from "./MainUserPage.style";

const MainUserPage = (): JSX.Element => {
  const userData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );

  return (
    <MainPageContainer>
      {/* <button onClick={() => console.log(`posts`, userData.allPostsToShow)} /> */}
      <ThoughtsContainer>
        <MainUserPageForm />
        {userData.allPostsToShow.length >= 1 && userData.logged
          ? userData.allPostsToShow.map((el) => (
              <Thought
                authorFirstName={el.author.firstName}
                authorLastName={el.author.lastName}
                authorPic={el.author.pic}
                date={new Date(el.created).toDateString()}
                content={el.textContent}
                key={el._id}
                likes={el.likes.length}
                likeStatus={el.likes.includes(userData._id) ? true : false}
                authorId={el.author._id}
                postId={el._id}
              />
            ))
          : null}
      </ThoughtsContainer>
      <UserInfoContainer>
        <UserMainInfo>
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
          <UserMainDetails>
            <UserHeader
              name={userData.firstName}
              lastName={userData.lastName}
              userId={userData._id}
            />
            <UserFollowingInfo>
              Followers{" "}
              <UserFollowingSpan>{userData.followers.length}</UserFollowingSpan>{" "}
              |{""}
              <UserFollowingSpan>
                {userData.followed.length}
              </UserFollowingSpan>{" "}
              Followed
            </UserFollowingInfo>
          </UserMainDetails>
        </UserMainInfo>
      </UserInfoContainer>
    </MainPageContainer>
  );
};

export default MainUserPage;
