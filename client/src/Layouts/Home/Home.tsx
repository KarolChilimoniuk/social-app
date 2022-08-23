import MainImg from "../../components/MainImg/MainImg";
import { HomeSection, HomeHeader, HomeLink } from "./Home.style";

const Home = (): JSX.Element => {
  return (
    <HomeSection>
      <HomeHeader>Welcome to your right place to meet other people!</HomeHeader>
      <HomeLink to="/auth">Join our society :)</HomeLink>
      <MainImg />
    </HomeSection>
  );
};

export default Home;
