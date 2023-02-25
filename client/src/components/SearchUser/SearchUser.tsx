import React, { useState } from "react";
import closeImg from "../../images/cross-mark.png";
import TextFormInput from "../TextFormInput/TextFormInput";
import SubInput from "../SubmitInput/SubmitInput";
import { SearchUserProps } from "../../types/types";
import {
  MobileSearchUserContainer,
  DesktopSearchUserContainer,
  SearchUserForm,
  SearchUserImg,
} from "./SearchUser.style";

const SearchUser = ({ hide, hideHandler }: SearchUserProps): JSX.Element => {
  const [formValue, setFormValue] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setFormValue(target.value);
  };

  const formSubmitHandler = (e: React.SyntheticEvent): void => {
    // const target =
    console.log("działa");
  };
  return (
    <>
      <MobileSearchUserContainer hidden={hide}>
        <SearchUserImg
          src={closeImg}
          onClick={() => {
            hideHandler(true);
            console.log(hide);
          }}
        />
        <SearchUserForm onSubmit={formSubmitHandler}>
          <TextFormInput
            type="text"
            placeholder="Search user"
            name="Search user"
            onChangeHandler={onChangeHandler}
            value={formValue}
            width={"70%"}
            height={"30px"}
          />
          <SubInput value={"Search user"} />
        </SearchUserForm>
      </MobileSearchUserContainer>
      <DesktopSearchUserContainer hidden={hide}>
        <SearchUserImg
          src={closeImg}
          onClick={() => {
            hideHandler(true);
            console.log(hide);
          }}
        />
        <SearchUserForm onSubmit={formSubmitHandler}>
          <TextFormInput
            type="text"
            placeholder="Search user"
            name="Search user"
            onChangeHandler={onChangeHandler}
            value={formValue}
            width={"70%"}
            height={"30px"}
          />
          <SubInput value={"Search user"} />
        </SearchUserForm>
      </DesktopSearchUserContainer>
    </>
  );
};

export default SearchUser;
