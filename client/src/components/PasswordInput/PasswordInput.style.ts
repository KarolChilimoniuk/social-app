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

  ::placeholder {
    color: rgb(255, 255, 255);
  }
`;

export const FormImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const FormImage = styled.img`
  width: 18px;
`;
