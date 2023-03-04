import styled, { keyframes } from "styled-components";

const loadingImgRotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const LoadingImg = styled.img`
  animation: ${loadingImgRotation} 2s linear infinite;
  height: 60px;
  margin: 0 20px 15px 0;
  width: 60px;
`;
