import { useSelector } from "react-redux";
import MainUserPageForm from "../../components/MainUserPageForm/MainUserPageForm";
import Thought from "../../components/Thought/Thought";
import UserProfileImg from "../../components/UserProfileImg/UserProfileImg";
import NoImgAvatar from "../../components/NoImgAvatar/NoImgAvatar";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import { IRootState, IUserDataState } from "../../interfaces/interfaces";
import {
  MainPageContainer,
  ThoughtsContainer,
  UserInfoContainer,
  UserMainInfo,
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
          <DesktopNav />
        </UserMainInfo>
      </UserInfoContainer>
    </MainPageContainer>
  );
};

export default MainUserPage;
