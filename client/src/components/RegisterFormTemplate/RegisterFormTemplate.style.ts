import styled from "styled-components";

export const FormBackground = styled.div`
  background-color: rgb(116, 150, 169);
  border-radius: 20px;
  margin-bottom: 30px;
  transform: rotate(9deg) translate(10px);
`;

export const FormContainer = styled.div`
  align-content: center;
  background-color: rgb(73, 115, 140);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: rotate(-9deg) translateY(-10px);
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;
