import styled from "styled-components";

export const NavDropdownContainer = styled.div``;

export const UserNavButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: flex;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

export const UserNavHeader = styled.h2`
  align-self: center;
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-right: 5px;
  margin-top: 0;
  padding: 0;
  text-align: center;
`;

export const UserImg = styled.img`
  max-width: 15px;
`;

export const UserNavImg = styled.img`
  padding-top: 5px;
  width: 10px;
`;

export const UserNavMenu = styled.div`
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  display: none;
  padding: 10px;
  position: absolute;
  z-index: 3;
`;