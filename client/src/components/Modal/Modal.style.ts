import styled from "styled-components";

export const ModalBackground = styled.div`
  align-items: center;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  padding-top: 120px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
`;

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction column;
  background-color: rgb(85, 121, 142);
  border-radius: 10px;
  overflow: auto;
  width: 300px;
  height: 400px;
  padding: 20px 20px 0 0;
  position: relative;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: flex-end;
  width: 90%;
`;

export const Img = styled.img`
  align-self: flex-end;
  cursor: pointer;
  height: 40px;
  margin: 0 0 15px 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  transition: transform 0.5s 0.1s;
  :hover {
    transform: rotate(180deg);
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 20px;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-weight: 600;
`;

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
  width: 80%;
`;

export const UserHeaderContainer = styled.div`
  padding-left: 20px;
`;
