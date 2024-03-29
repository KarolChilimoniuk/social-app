import styled from "styled-components";

export const MainPageBackground = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(43, 88, 114, 0.8);
  width: 100%;
`;

export const MainPageContainer = styled.section`
  align-items: center;
  // background-color: rgba(43, 88, 114, 0.8);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  max-width: 2100px;
  padding-bottom: 20px;
  padding-top: 100px;
  @media (min-width: 900px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

export const ThoughtsContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 1024px) {
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    width: 55%;
  }
`;

export const Paragraph = styled.p`
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
`;
