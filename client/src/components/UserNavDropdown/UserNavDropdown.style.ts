import styled from "styled-components";

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
  &:hover {
    color: rgb(43, 88, 114);
    cursor: pointer;
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

export const UserNavHeader = styled.h2`
  align-self: center;
  color: rgb(0, 90, 0);
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-right: 5px;
  margin-top: 0;
  padding: 0;
  text-align: center;
`;

export const UserImgContainer = styled.div`
  align-items: center;
  background-color: rgba(200, 200, 200, 0.6);
  border-radius: 30px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`;

export const UserImg = styled.img`
  max-width: 15px;
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
  width: 70px;
  z-index: 3;
`;
