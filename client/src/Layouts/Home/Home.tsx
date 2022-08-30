import { useDispatch } from "react-redux";
import MainImg from "../../components/MainImg/MainImg";
import { HomeSection, HomeHeader, HomeLink, HomeParagraph } from "./Home.style";
import {
  hasAccountTrue,
  hasAccountFalse,
} from "../../services/actions/appDataAction";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <HomeSection>
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
