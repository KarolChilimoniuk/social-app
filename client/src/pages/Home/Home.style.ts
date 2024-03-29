import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeSection = styled.section`
  margin: 0;
  max-width: 1700px;
  padding-top: 30%;
  position: relative;
  z-index: 5;
  @media (orientation: landscape) {
    padding-left: 50px;
    padding-top: 10%;
  }
`;

export const Header = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: rgb(90, 0, 0);
    text-decoration: underline;
  }
`;

export const Paragraph = styled.p`
  @media (min-width: 700px) {
    font-size: 1.2rem;
  }
`;
