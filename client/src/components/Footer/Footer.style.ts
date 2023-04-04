import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: rgb(43, 88, 114);
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  padding-left: 30px;
  width: 100vw;
  z-index: 1;
  @media (orientation: landscape) {
    padding-left: 60px;
  }
`;

export const Header = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 0.8rem;
`;
