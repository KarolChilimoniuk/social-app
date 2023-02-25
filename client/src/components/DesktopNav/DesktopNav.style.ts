import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LoggedUserInfo = styled.div`
  display: flex;
`;
export const DesktopNavContainer = styled.div`
  align-self: flex-start;
  display: none;
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
  position: relative;
  width: 35%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  width: 90%;
`;

export const NavLi = styled.li`
  display: flex;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  justify-content: flex-start;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  transition: background-color 0.3s 0.1s;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :active {
    font-size: 0.8rem;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  color: rgb(0, 0, 0);
  text-decoration: none;
`;

export const NoLinkImgContainer = styled.div`
  color: rgb(0, 0, 0);
  text-decoration: none;
`;

export const NavImg = styled.img`
  margin-right: 10px;
  width: 20px;
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const UserInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  padding-top: 20px;
`;

export const UserFollowingInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const UserFollowingParagraph = styled.p`
  margin: 0 20px 0 0;
`;

export const UserFollowingSpan = styled.span`
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 800;
  margin-left: 10px;
  margin-right: 10px;
  transition: color 0.2s 0.1s;
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
