import { InputProps } from "../../types/types";
import { InputContainer, Input } from "./FileInput.style";

const FormFileInput = ({
  name,
  accept,
  onChangeHandler,
}: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <>
        <Input
          type="file"
          name={name}
          accept={accept}
          onChange={onChangeHandler}
        />
      </>
    </InputContainer>
  );
};

export default FormFileInput;
