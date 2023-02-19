import styled from "styled-components";

export const ImgContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  @media (orientation: landscape) {
    padding-right: 50px;
    padding-bottom: 40px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 300px;
  overflow: hidden;
  @media (orientation: landscape) {
    align-self: flex-end;
  }
  @media (orientation: portrait) and (min-width: 800px) {
    width: 400px;
  }
  @media (orientation: landscape) and (min-width: 1179px) {
    width: 450px;
  }
`;
