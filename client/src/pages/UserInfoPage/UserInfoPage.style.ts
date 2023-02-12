import styled from "styled-components";

export const UserInfoPageContainer = styled.section`
  align-items: center;
  background-color: rgba(43, 88, 114, 0.8);
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding-bottom: 20px;
  padding-top: 90px;
  width: 100vw;
`;

export const UserToShowContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 900px) {
    width: 55%;
  }
`;

export const UserMainInfo = styled.div`
  align-self: flex-start;
  display: flex;
  width: 100%;
`;

export const UserMainDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding-top: 10px;
  width: 100%;
`;

export const UserMainDetailsHeader = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const UserMainDetailsParagraph = styled.p`
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: slace-between;
  margin-top: 15px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
`;

export const UserFollowingDetailsParagraph = styled.p`
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
  width: 100%;
`;

export const UserFollowingDetailsSpan = styled.span`
  color: rgb(255, 255, 255);
  margin-left: 10px;
  margin-right: 10px;
`;
export const UserPostsContainer = styled.div`
  align-items: center;
  border-top: 1px solid rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
`;

export const LoggedUserInfoContainer = styled.section`
  align-self: flex-start;
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
