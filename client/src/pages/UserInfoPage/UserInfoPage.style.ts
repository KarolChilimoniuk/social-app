import styled from "styled-components";

export const UserInfoPageContainer = styled.section`
  align-items: center;
  background-color: rgba(43, 88, 114, 0.8);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
  padding-top: 90px;
  width: 100vw;
`;

export const UserMainInfo = styled.div`
  align-self: flex-start;
  display: flex;
  padding-left: 10px;
`;

export const UserMainDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding-top: 10px;
`;

export const UserMainDetailsHeader = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const UserMainDetailsParagraph = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
`;

export const UserFollowingDetail = styled.span`
  color: rgb(255, 255, 255);
  margin-top: 10px;
`;

export const UserPostsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90%;
  @media (min-width: 900px) {
    width: 45%;
  }
`;
