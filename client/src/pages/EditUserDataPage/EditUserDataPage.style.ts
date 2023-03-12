import styled from "styled-components";

export const EditDataBackground = styled.div`
  display: flex;
  background-color: rgba(43, 88, 114, 0.8);
  width: 100%;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const EditDataSection = styled.section`
  align-items: flex-start;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  padding-left: 20px;
  padding-top: 80px;
  max-width: 2100px;
  @media (min-width: 650px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    flex-direction: row;
    justify-content: flex-start;
    width: 60%;
  }
`;

export const ErrorParagraph = styled.p`
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  color: rgb(120, 0, 0);
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px;
`;

export const UpdateParagraph = styled.p`
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  color: rgb(0, 100, 0);
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px;
`;

export const FormContainer = styled.section``;

export const Form = styled.form`
  border-radius: 5px;
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 20px;
  width: 90%;
`;

export const FormHeader = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

export const FormParagraph = styled.p`
  color: rgb(255, 255, 255);
  font-weight: 600;
`;

export const FormSecondParagraph = styled.p`
  font-weight: 400;
  margin-top: 0;
`;

export const ImgContainer = styled.div`
  margin-bottom: 20px;
  margin-right: 30px;
  padding-right: 30px;
  @media (min-width: 1024px) {
    min-height: 95vh;
  }
`;
