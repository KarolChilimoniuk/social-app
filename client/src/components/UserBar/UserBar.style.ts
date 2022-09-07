import styled from "styled-components";

export const BarContainer1 = styled.div`
  align-items: center;
  background-color: "transparent";
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: end;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  transition: background-color 0.3s 0.2s;
`;

export const BarParagraph = styled.p`
  font-size: 0.9rem;
  margin-right: 10px;
`;

export const BarButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: 40px;
  text-transform: capitalize;
  :hover {
    color: rgb(0, 90, 0);
  }
`;
