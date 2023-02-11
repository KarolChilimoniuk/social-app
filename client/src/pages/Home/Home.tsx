import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import MainImg from "../../components/MainImg/MainImg";
import { HomeSection, HomeHeader, HomeLink, HomeParagraph } from "./Home.style";
import { hasAccountTrue, hasAccountFalse } from "../../actions/appDataAction";
// import { tokenChecking, logoutUser } from "../../services/api/auth";
import { IRootState } from "../../interfaces/interfaces";

const Home = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  // const appData = useSelector((state: IRootState) => state.userData);
  const loginStatus: boolean = useSelector(
    (state: IRootState) => state.userData.logged
  );
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    loginStatus && navigate("/logged");
    !loginStatus && navigate("/");
  }, [loginStatus]);

  return (
    <HomeSection>
      {/* <button onClick={() => tokenChecking(dispatch)}>check token</button>
      <button onClick={() => console.log(appData)}>check user</button> */}
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
