import styled from "styled-components";

export const CommentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  width: 90%;
`;

export const Paragraph = styled.p`
  color: rgb(255, 255, 255);
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 90%;
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const SubmitContainer = styled.div`
  border-bottom: 1px solid rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

export const ResponsesTitle = styled.p`
  color: rgb(30, 30, 30);
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 5px;
  transition: all 0.2s 0.1s;
  :hover {
    color: rgb(255, 255, 255);
  }
`;

export const ResponsesContainer = styled.div`
  align-items: center;
  // background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  width: 90%;
`;
