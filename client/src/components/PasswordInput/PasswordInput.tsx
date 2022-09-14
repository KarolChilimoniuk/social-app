import { useState } from "react";
import { InputProps } from "../../services/types/types";
import View from "../../images/view.png";
import Hide from "../../images/hide.png";
import {
  FormImageContainer,
  FormImage,
  InputContainer,
  Input,
} from "./PasswordInput.style";

const PasswordInput = ({
  onChangeHandler,
  value,
  placeholder,
  name,
}: InputProps): JSX.Element => {
  const [hideStatus, changeHideStatus] = useState<boolean>(true);

  return (
    <>
      <InputContainer>
        <Input
          type={hideStatus ? "password" : "text"}
          placeholder={placeholder}
          name={name}
          onChange={onChangeHandler}
          value={value}
        />
        <FormImageContainer>
          <FormImage
            src={hideStatus ? View : Hide}
            onClick={() => changeHideStatus(!hideStatus)}
            alt="Password visibility switcher"
            title="Click to see or hide your password"
          />
        </FormImageContainer>
      </InputContainer>
    </>
  );
};

export default PasswordInput;
