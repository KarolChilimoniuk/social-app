import styled from "styled-components";

export const FormContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 170px;
  justify-content: flex-start;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding-top: 20px;
  padding-right: 10px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10%;
  width: 100%;
`;
