import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavDropdownContainer = styled.div``;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 0;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.3s 0.1s;
  &:hover {
    color: rgb(43, 88, 114);
  }
`;

export const UserNavButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: flex;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const UserNavImg = styled.img`
  margin-left: 5px;
  padding-top: 5px;
  width: 10px;
`;

export const UserNavMenu = styled.div`
  background-color: rgb(0, 0, 0);
  bottom: -55px;
  border-radius: 5px;
  display: none;
  padding: 10px;
  right: 30px;
  position: absolute;
  width: 100px;
  z-index: 3;
`;

export const Link = styled(NavLink)`
  color: rgb(255, 255, 255);
  transition: color 0.3s 0.1s;
  :hover {
    color: rgb(43, 88, 114);
  }
`;

export const OptionImg = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  width: 15px;
`;
