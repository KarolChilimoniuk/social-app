import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainUserPageForm from "../../components/MainUserPageForm/MainUserPageForm";
import Thought from "../../components/Thought/Thought";
import {
  IRootState,
  IUserInitState,
} from "../../services/interfaces/interfaces";
import { MainPageContainer, ThoughtsContainer } from "./MainUserPage.style";

const MainUserPage = (): JSX.Element => {
  const userData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );

  return (
    <MainPageContainer>
      <button onClick={() => console.log(`posts`, userData.allPostsToShow)} />
      <MainUserPageForm />
      <ThoughtsContainer>
        {userData.allPostsToShow.length >= 1 && userData.logged
          ? userData.allPostsToShow.map((el) => (
              <Thought
                authorFirstName={el.author.firstName}
                authorLastName={el.author.lastName}
                authorPic={el.author.pic}
                date={new Date(el.created).toDateString()}
                content={el.textContent}
              />
              // <div>post</div>
            ))
          : null}
      </ThoughtsContainer>
    </MainPageContainer>
  );
};

export default MainUserPage;
