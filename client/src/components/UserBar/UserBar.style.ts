import styled from "styled-components";

export const BarContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.color};
  border-bottom: 1px solid rgb(0, 0, 0);
  box-shadow: 5px 1px 5px rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: end;
  right: 0;
  left: 0;
  padding-right: 50px;
  position: fixed;
  top: 0;
  transition: background-color 0.3s 0.2s;
  z-index: 3;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  margin-right: 10px;
`;
