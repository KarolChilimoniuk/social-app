import styled from "styled-components";

export const DesktopNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-top: 30px;
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
  justify-content: center;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  transition: background-color 0.3s 0.1s;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const UserFollowingInfo = styled.p`
  cursor: pointer;
  margin-top: 10px;
`;

export const UserFollowingSpan = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 800;
  margin-left: 10px;
  margin-right: 10px;
`;
