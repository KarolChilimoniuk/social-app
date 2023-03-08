import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: rgb(116, 150, 169);
  border: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  width: ${(props) => props.theme};
`;

export const Input = styled.input`
  background-color: rgb(116, 150, 169);
  border-radius: 5px;
  border: 0;
  color: rgb(255, 255, 255);
  height: ${(props) => props.height};
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  width: 80%;

  &:focus {
    background-color: rgb(116, 150, 169);
    outline: none;
  }
  &:autofill {
    background-color: rgb(116, 150, 169);
    border: 0;
    border-radius: 5px;
  }
  ::placeholder {
    color: rgb(255, 255, 255);
  }
`;
