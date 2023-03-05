import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  color: ${(props) =>
    props.theme === "active" ? "rgb(0,0,0)" : "rgb(255, 255, 255)"};
  cursor: pointer;
  margin: 0 10px 0 10px;
  transition: color 0.3s 0.1s;
  :hover {
    color: rgb(0, 0, 0);
  }
`;
