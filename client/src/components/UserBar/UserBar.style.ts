import styled from "styled-components";

export const BarContainer1 = styled.div`
  align-items: center;
  background-color: "transparent";
  border-bottom: 1px solid rgb(0, 0, 0);
  box-shadow: 5px 1px 5px rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: end;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  transition: background-color 0.3s 0.2s;
  z-index: 4;
`;

export const UserImg = styled.img`
  max-width: 20px;
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
