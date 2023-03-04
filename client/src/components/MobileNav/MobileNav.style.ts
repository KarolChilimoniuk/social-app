import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileNavContainer = styled.div`
  align-items: flex-start;
  display: flex;
  background-color: rgb(43, 88, 114);
  box-shadow: 7px 3px 12px -6px rgba(0, 0, 0, 1);
  flex-direction: column;
  left: -500px;
  height: 0;
  padding-top: 90px;
  position: fixed;
  top: 0;
  width: 0;
  transition: 0.3s ease;
  z-index: 2;
`;

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
`;

export const NavLi = styled.li`
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  transition: background-color 0.3s 0.1s;
  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  :active {
    font-size: 0.8rem;
  }
`;

export const Link = styled(NavLink)`
  color: rgb(0, 0, 0);
  display: inline-block;
  text-decoration: none;
  width: 100%;
`;

export const NoLinkImgContainer = styled.div`
  color: rgb(0, 0, 0);
  text-decoration: none;
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const NavImg = styled.img`
  margin-right: 10px;
  width: 20px;
`;

export const LoggedUserInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
`;

export const UserAvatarContainer = styled.div`
  padding-top: 30px;
`;

export const UserMainInfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  padding-top: 10px;
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const UserFollowingInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media (min-width: 430px) {
    flex-direction: row;
  }
`;

export const UserFollowingParagraph = styled.p`
  display: flex;
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
