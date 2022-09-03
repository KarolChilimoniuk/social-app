import { useDispatch, useSelector } from "react-redux";
import MainImg from "../../components/MainImg/MainImg";
import { HomeSection, HomeHeader, HomeLink, HomeParagraph } from "./Home.style";
import {
  hasAccountTrue,
  hasAccountFalse,
} from "../../services/actions/appDataAction";
import { tokenChecking, logoutUser } from "../../services/api/auth";
import { IRootState } from "../../services/interfaces/interfaces";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: IRootState) => state.userData);
  const navigate = useNavigate();

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
