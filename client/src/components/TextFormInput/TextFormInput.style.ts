import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: rgb(116, 150, 169);
  border: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  width: 210px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  color: rgb(255, 255, 255);
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 5px;

  &:focus {
    background-color: transparent;
    outline: none;
  }
  &:autofill {
    background-color: transparent;
    border: 0;
    border-radius: 5px;
  }
  ::placeholder {
    color: rgb(255, 255, 255);
  }
`;
