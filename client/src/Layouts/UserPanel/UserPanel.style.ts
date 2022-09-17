import styled from "styled-components";

export const ErrorParagraph = styled.p`
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  color: rgb(120, 0, 0);
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px;
`;

export const FormContainer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
`;

export const Form = styled.form`
  background-color: rgba(43, 88, 114, 0.8);
  border-radius: 5px;
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 20px;
  padding-right: 0;
  width: 90%;
`;

export const FormHeader = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;
