import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: rgb(116, 150, 169);
  border: 0;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  cursor: pointer;

  ::placeholder {
    color: rgb(255, 255, 255);
  }
`;
