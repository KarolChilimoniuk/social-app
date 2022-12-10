import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: rgb(200, 200, 200);
  box-shadow: 7px 3px 12px -6px rgba(0, 0, 0, 1);
  left: -200px;
  height: 0;
  position: fixed;
  top: 0;
  width: 0;
  transition: 0.3s ease;
  z-index: 2;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const NavLi = styled.li`
  font-weight: 700;
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
