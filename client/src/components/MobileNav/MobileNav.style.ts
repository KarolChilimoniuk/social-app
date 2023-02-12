import styled from "styled-components";

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
  @media (min-width: 900px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  width: 90%;
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

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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
