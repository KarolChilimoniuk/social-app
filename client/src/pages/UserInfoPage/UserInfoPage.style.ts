import styled from "styled-components";

export const UserInfoPageContainer = styled.div`
  align-items: flex-start;
  background-color: rgba(43, 88, 114, 0.8);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
  padding-top: 90px;
  width: 100vw;
  @media (min-width: 930px) {
    flex-direction: row;
  }
`;

export const UserToShowContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    width: 55%;
  }
`;

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media (min-width: 515px) {
    flex-direction: row;
  }
`;

export const UserAvatarContainer = styled.div`
  padding-top: 15px;
`;

export const UserMainDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 515px) {
    margin-left: 30px;
  }
`;

export const UserMainDetailsHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  @media (min-width: 515px) {
    margin-top: 10px;
  }
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
  cursor: pointer;
  font-weight: 800;
  margin-left: 10px;
  margin-right: 10px;
  transition: color 0.2s 0.1s;
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const UserPostsContainer = styled.div`
  align-items: center;
  border-top: 1px solid rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
`;
