import styled from "styled-components";

export const Button = styled.button`
  background-color: rgba(5, 41, 63, 0.6);
  border: 0;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  height: 30px;
  margin-left: 40px;
  width: 100px;
  transition: background-color 0.3s 0.1s;
  :hover {
    background-color: rgba(5, 41, 63, 1);
  }
`;
