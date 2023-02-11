import { InputContainer, Input } from "./TextFormInput.style";
import { InputProps } from "../../types/types";

const FormInput = ({
  type,
  placeholder,
  name,
  onChangeHandler,
  value,
  width,
  height,
}: InputProps): JSX.Element => {
  return (
    <InputContainer theme={width || "210px"}>
      <>
        <Input
          onFocus={(e) => e.target.setAttribute("autocomplete", "nope")}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChangeHandler}
          value={value}
          height={height && height}
        />
      </>
    </InputContainer>
  );
};

export default FormInput;
