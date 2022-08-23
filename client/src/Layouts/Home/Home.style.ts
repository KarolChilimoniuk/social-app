import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeSection = styled.section`
  margin: 0;
  padding-top: 30%;
  @media (orientation: landscape) {
    padding-left: 50px;
    padding-top: 10%;
  }
`;

export const HomeHeader = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

export const HomeLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  @media (min-width: 700px) {
    font-size: 1.2rem;
  }
`;
