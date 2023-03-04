import styled from "styled-components";

export const MobileSearchUserContainer = styled.div`
  align-items: center;
  background-color: rgb(43, 88, 114);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  left: ${(props) => (props.hidden === true ? "-1000px" : "0")};
  padding-top: 90px;
  position: absolute;
  top: 0;
  transition: left 0.3s 0.2s;
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
    min-height: 100%;
    padding-top: 30px;
    position: absolute;
    top: 0;
    transition: right 0.5s 0.2s;
    right: ${(props) => (props.hidden === true ? "-4000px" : "0")};
    width: 100%;
    z-index: 2;
  }
`;

export const Form = styled.form`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  width: 90%;
`;

export const Img = styled.img`
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

export const SearchUserResult = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 20px;
  width: 90%;
`;

export const FilteredUserContainer = styled.div`
  align-items: center;
  display: flex;
  width: 90%;
`;

export const UserHeaderContainer = styled.div`
  padding-left: 20px;
`;
