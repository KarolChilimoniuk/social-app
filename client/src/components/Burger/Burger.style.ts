import styled from "styled-components";

export const BurgerContainer = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: 34px;
  justify-content: space-between;
  left: 20px;
  position: fixed;
  width: 40px;
  @media (max-width: 1023px) {
    display: flex;
  }
`;

export const Bar1 = styled.div`
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  display: block;
  height: 5px;
  top: 0;
  width: 100%;
  transition: 0.3s ease;
`;

export const Bar2 = styled.div`
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  display: block;
  height: 5px;
  top: 15px;
  width: 100%;
  transition: 0.3s ease;
`;

export const Bar3 = styled.div`
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  display: block;
  height: 5px;
  width: 100%;
  transition: 0.3s ease;
`;
