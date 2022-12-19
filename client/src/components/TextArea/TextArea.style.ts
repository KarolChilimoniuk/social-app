import styled from "styled-components";

export const TextAreaContainer = styled.div`
  background-color: rgb(116, 150, 169);
  border: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  width: ${(props) => props.theme};
`;

export const Textarea = styled.textarea`
  background-color: transparent;
  border: 0;
  color: rgb(255, 255, 255);
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  resize: none;
  width: 100%;

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
