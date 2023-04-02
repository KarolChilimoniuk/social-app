import styled from "styled-components";

export const ResponseContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0 15px 15px 15px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 5px;
  width: 100%;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const HeaderDateContainer = styled.div`
  margin-left: 10px;
`;

export const DateParagraph = styled.p`
  color: rgb(255, 255, 255);
  font-size: 0.7rem;
  font-weight: 600;
  margin: 0;
`;

export const CommentContentParagraph = styled.p`
  margin-top: 5px;
`;

export const ResponseContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
`;

export const ResponseParagraph = styled.p`
  margin-top: 0;
  width: 100%;
`;

export const LikesContainer = styled.div`
  width: 95%;
`;
