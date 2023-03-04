import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import MainImg from "../../components/MainImg/MainImg";
import { HomeSection, Header, Link, Paragraph } from "./Home.style";
import { hasAccountTrue, hasAccountFalse } from "../../actions/appDataAction";
import { IRootState } from "../../interfaces/interfaces";

const Home = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

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
      <Header>Welcome to your right place to meet other people!</Header>
      <Paragraph>
        <Link
          to="/auth"
          onClick={() => {
            dispatch(hasAccountFalse());
          }}
        >
          Join our society
        </Link>
        <span> or </span>
        <Link
          to="/auth"
          onClick={() => {
            dispatch(hasAccountTrue());
          }}
        >
          {" "}
          Log in
        </Link>
      </Paragraph>
      <MainImg />
    </HomeSection>
  );
};

export default Home;
