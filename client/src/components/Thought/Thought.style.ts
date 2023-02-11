import styled from "styled-components";

export const ThoughtContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  min-height: 100px;
  margin-top: 30px;
  padding-bottom: 20px;
  width: 100%;
`;

export const ImgNameDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-top: 20px;
`;

export const ThoughtDate = styled.span`
  color: rgb(255, 255, 255);
  font-size: 0.7rem;
  font-weight: 600;
`;

export const ThoughtContent = styled.p`
  margin-bottom: 20px;
  margin-top: 0;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LikesContent = styled.div`
  display: flex;
`;
