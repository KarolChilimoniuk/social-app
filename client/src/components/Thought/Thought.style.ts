import styled from "styled-components";

export const ThoughtContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 30px;
  padding: 10px 20px 20px 20px;
  width: 90%;
`;

export const ImgNameDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export const NameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ThoughtDate = styled.span`
  color: rgb(255, 255, 255);
  font-size: 0.7rem;
  font-weight: 600;
`;

export const ThoughtContent = styled.p`
  margin-bottom: 20px;
  margin-top: 0;
  padding-right: 20px;
  word-break: break-all;
`;

export const LikesContent = styled.div`
  display: flex;
`;

export const Paragraph = styled.p`
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 10px;
  text-decoration: none;
  transition: all 0.2s 0.1s;
  :hover {
    color: rgb(255, 255, 255);
  }
`;
