import styled from "styled-components";

export const UserInfoBackground = styled.div`
  display: flex;
  background-color: rgba(43, 88, 114, 0.8);
  justify-content: center;
  width: 100%;
`;

export const UserInfoPageContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
  padding-top: 80px;
  width: 90%;
  max-width: 2100px;
  @media (min-width: 930px) {
    flex-direction: row;
  }
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  width: 100%;
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const UserToShowContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    width: 55%;
  }
`;

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  max-width: 350px;
  @media (max-width: 370px) {
    overflow: auto;
  }
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
  justify-content: flex-start;
  margin-top: 15px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
`;

export const UserDescriptionParagraph = styled.p`
  color: rgb(0, 0, 0);
  margin: 0;
  width: 100%;
  min-width: 260px;
`;

export const UserFollowingDetailsParagraph = styled.p`
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  font-weight: 600;
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
  width: 100%;
`;

export const NoThoughtsParagraph = styled.p`
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
`;
