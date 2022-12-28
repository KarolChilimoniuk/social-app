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
      <button onClick={() => console.log(`posts`, userData.posts)} />
      <MainUserPageForm />
      <ThoughtsContainer>
        {userData.posts.length >= 1 && userData.logged
          ? userData.posts.map((el) => (
              <Thought
                authorFirstName={el.author.firstName}
                authorLastName={el.author.lastName}
                authorPic={el.author.userPic}
                date={new Date(el.created).toDateString()}
                content={el.textContent}
              />
            ))
          : null}
      </ThoughtsContainer>
    </MainPageContainer>
  );
};

export default MainUserPage;
