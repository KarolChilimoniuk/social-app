import { InputContainer, Input } from "./TextFormInput.style";
import { InputProps } from "../../services/types/types";

const FormInput = ({
  type,
  placeholder,
  name,
  onChangeHandler,
  value,
}: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChangeHandler}
          value={value}
        />
      </>
    </InputContainer>
  );
};

export default FormInput;
