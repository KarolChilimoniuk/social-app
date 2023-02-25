import styled from "styled-components";

export const MobileSearchUserContainer = styled.div`
  align-items: center;
  background-color: rgb(43, 88, 114);
  display: flex;
  flex-direction: column;
  height: 100%;
  left: ${(props) => (props.hidden === true ? "-1000px" : "0")};
  padding-top: 90px;
  position: absolute;
  top: 0;
  transition: left 0.3s 0.1s;
  width: 100%;
  z-index: 3;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DesktopSearchUserContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    align-items: center;
    background-color: rgb(85, 121, 142);
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 30px;
    position: absolute;
    top: 0;
    transition: right 0.3s 0.1s;
    right: ${(props) => (props.hidden === true ? "-4000px" : "0")};
    width: 100%;
    z-index: 3;
  }
`;

export const SearchUserForm = styled.form`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  width: 90%;
`;

export const SearchUserImg = styled.img`
  align-self: flex-end;
  cursor: pointer;
  height: 40px;
  margin: 0 20px 15px 0;
  width: 40px;
  transition: transform 0.5s 0.1s;

  :hover {
    transform: rotate(180deg);
  }
`;
