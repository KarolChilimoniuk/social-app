import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.h3`
  margin: 0;
  transition: color 0.3s 0.1s;
  :hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Link = styled(NavLink)`
  color: rgb(0, 0, 0);
  text-decoration: none;
`;
