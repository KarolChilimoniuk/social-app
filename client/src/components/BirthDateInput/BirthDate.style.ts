import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 210px;
`;

export const InputLabel = styled.label`
  align-items: center;
  color: rgb(255, 255, 255);
  display: flex;
  font-size: 0.8rem;
  margin-right: 10px;
  text-align: center;
`;

export const Input = styled.input`
  background-color: rgb(116, 150, 169);
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
  }

  ::placeholder {
    color: rgb(255, 255, 255);
  }
`;
