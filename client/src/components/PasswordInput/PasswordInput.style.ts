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
  border-radius: 5px;
  color: rgb(255, 255, 255);
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 5px;

  &:focus {
    background-color: transparent;
    outline: none;
  }

  ::placeholder {
    color: rgb(255, 255, 255);
  }
`;

export const FormImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  width: 18px;
`;
