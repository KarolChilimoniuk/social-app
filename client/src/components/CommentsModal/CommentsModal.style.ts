import styled from "styled-components";

export const ModalBackground = styled.div`
  align-items: center;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  overflow: scroll;
  padding-top: 40px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
  @media (min-width: 1024px) {
    padding-bottom: 200px;
    padding-top: 100px;
  }
`;

export const ModalContainer = styled.div`
align-items: center;
display: flex;
flex-direction column;
background-color: rgb(85, 121, 142);
border-radius: 10px;
overflow: auto;
height: 90vh;
width: 80%;
padding: 20px 20px 20px 20px;
position: relative;
@media (min-width: 700px) {
  height: 90vh;
  width: 70%;
}
@media(min-width: 1024px) {
  width: 700px;
  height: 700px;
}
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
`;

export const ImgContainer2 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  width: 90%;
`;

export const Img = styled.img`
  cursor: pointer;
  height: 40px;
  margin: 0 0 15px 0;
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
  width: 90%;
`;

export const Comment = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  width: 90%;
`;

export const Paragraph = styled.p`
  color: rgb(255, 255, 255);
`;

export const FormContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: flex-start;
  padding-top: 20px;
  padding-right: 10px;
  width: 85%;
  min-width: 260px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
