import styled from "styled-components";

export const UserImgContainer = styled.div`
  align-items: center;
  background-color: rgba(200, 200, 200, 0.6);
  border-radius: 50px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: ${(props) => props.width + "px"};
  min-width: 15px;
`;
