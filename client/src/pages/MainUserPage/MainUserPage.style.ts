import styled from "styled-components";

export const MainPageContainer = styled.section`
  align-items: center;
  background-color: rgba(43, 88, 114, 0.8);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
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
  @media (min-width: 900px) {
    width: 45%;
  }
`;

export const UserInfoContainer = styled.section`
  display: none;
  @media (min-width: 900px) {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    height: 300px;
    min-width: 40%;
    justify-content: flex-start;
  }
`;

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const UserMainDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-top: 30px;
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const UserMainInfoHeader = styled.h3`
  margin: 0;
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
