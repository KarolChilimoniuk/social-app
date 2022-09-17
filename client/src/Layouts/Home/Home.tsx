import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import MainImg from "../../components/MainImg/MainImg";
import { HomeSection, HomeHeader, HomeLink, HomeParagraph } from "./Home.style";
import {
  hasAccountTrue,
  hasAccountFalse,
} from "../../services/actions/appDataAction";
import { tokenChecking, logoutUser } from "../../services/api/auth";
import {
  IRootState,
  IUserInitState,
} from "../../services/interfaces/interfaces";
import { useNavigate, NavigateFunction } from "react-router-dom";

const Home = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const stateData: IUserInitState = useSelector(
    (state: IRootState) => state.userData
  );
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    stateData.logged === true && navigate("/");
  }, [stateData.logged]);

  return (
    <HomeSection>
      <button onClick={() => tokenChecking(dispatch)}>check token</button>
      <button onClick={() => console.log(stateData)}>check user</button>
      <button
        onClick={() => {
          logoutUser(dispatch, navigate);
          console.log(stateData);
        }}
      >
        logout
      </button>
      <HomeHeader>Welcome to your right place to meet other people!</HomeHeader>
      <HomeParagraph>
        <HomeLink
          to="/auth"
          onClick={() => {
            dispatch(hasAccountFalse());
          }}
        >
          Join our society
        </HomeLink>
        <span> or </span>
        <HomeLink
          to="/auth"
          onClick={() => {
            dispatch(hasAccountTrue());
          }}
        >
          {" "}
          Log in
        </HomeLink>
      </HomeParagraph>
      <MainImg />
    </HomeSection>
  );
};

export default Home;
