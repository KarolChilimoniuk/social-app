import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import MainUserPageForm from "../../components/MainUserPageForm/MainUserPageForm";
import Thought from "../../components/Thought/Thought";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import { fetchUsers } from "../../services/api/fetchUsers";
import { IRootState, IUserDataState } from "../../interfaces/interfaces";
import {
  MainPageBackground,
  MainPageContainer,
  ThoughtsContainer,
} from "./MainUserPage.style";

const MainUserPage = (): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  return (
    <MainPageBackground>
      <MainPageContainer>
        <ThoughtsContainer>
          <MainUserPageForm />
          {loggedUserData.allPostsToShow === [] && <LoadingIcon />}
          {loggedUserData.allPostsToShow.length >= 1 && loggedUserData.logged
            ? loggedUserData.allPostsToShow.map((el) => (
                <Thought
                  authorFirstName={el.author.firstName}
                  authorLastName={el.author.lastName}
                  authorPic={el.author.pic}
                  date={new Date(el.created).toDateString()}
                  content={el.textContent}
                  likes={el.likes.length}
                  likeStatus={
                    el.likes.includes(loggedUserData._id) ? true : false
                  }
                  authorId={el.author._id}
                  postId={el._id}
                  key={el._id}
                />
              ))
            : null}
        </ThoughtsContainer>
        <DesktopNav />
      </MainPageContainer>
    </MainPageBackground>
  );
};

export default MainUserPage;
