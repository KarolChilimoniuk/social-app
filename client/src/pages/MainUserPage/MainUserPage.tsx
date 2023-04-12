import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import MainUserPageForm from "../../components/MainUserPageForm/MainUserPageForm";
import Thought from "../../components/Thought/Thought";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import { fetchUsers } from "../../services/api/fetchUsers";
import { IRootState, IUserDataState } from "../../interfaces/interfaces";
import {
  MainPageBackground,
  MainPageContainer,
  ThoughtsContainer,
  Paragraph,
} from "./MainUserPage.style";

const MainUserPage = (): JSX.Element => {
  const loggedUserData: IUserDataState = useSelector(
    (state: IRootState) => state.userData
  );
  const dispatch: Dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  return (
    <MainPageBackground>
      <MainPageContainer>
        <ThoughtsContainer>
          <MainUserPageForm />
          {loggedUserData.allPostsToShow.length === 0 && (
            <Paragraph>
              Your wall is still empty. Publish your first thought!
            </Paragraph>
          )}
          {loggedUserData.allPostsToShow.length >= 1 && loggedUserData.logged
            ? loggedUserData.allPostsToShow
                .filter(
                  (el, i) => i <= indexOfLastPost && i >= indexOfFirstPost
                )
                .map((post) => (
                  <Thought
                    authorFirstName={post.author.firstName}
                    authorLastName={post.author.lastName}
                    authorPic={post.author.pic}
                    date={new Date(post.created).toDateString()}
                    content={post.textContent}
                    likes={post.likes.length}
                    likeStatus={
                      post.likes.includes(loggedUserData._id) ? true : false
                    }
                    authorId={post.author._id}
                    postId={post._id}
                    key={post._id}
                  />
                ))
            : null}
          {loggedUserData.allPostsToShow.length !== 0 && (
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={loggedUserData.allPostsToShow.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </ThoughtsContainer>
        <DesktopNav />
      </MainPageContainer>
    </MainPageBackground>
  );
};

export default MainUserPage;
