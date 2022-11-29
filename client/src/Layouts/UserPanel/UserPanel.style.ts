import styled from "styled-components";

export const SectionContainer = styled.div`
  align-items: flex-start;

  background-color: rgba(43, 88, 114, 0.8);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  padding-left: 40px;
  padding-top: 80px;
  width: 100vw;
  @media (min-width: 650px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: flex-start;
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
