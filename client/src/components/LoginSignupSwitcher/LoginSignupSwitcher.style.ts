import styled from "styled-components";

export const Switcher = styled.button`
  background-color: rgb(116, 150, 169);
  border: 0;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 50px;
  margin-top: 30px;
  transition: background-color 0.3s 0.1s, color 0.3s 0.1s;

  :hover {
    background-color: rgb(5, 41, 63);
    color: rgb(255, 255, 255);
  }
`;
