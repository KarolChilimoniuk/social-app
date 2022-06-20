import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeHeader = styled.h2`
  font-size: 4rem;
`;

const Home = (): JSX.Element => {
  return (
    <div>
      <HomeHeader>Home</HomeHeader>
      <NavLink to="/auth">Join our society :)</NavLink>
    </div>
  );
};

export default Home;
