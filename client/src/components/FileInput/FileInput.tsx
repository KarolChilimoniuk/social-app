import { InputProps } from "../../types/types";
import { FileInputContainer, Input } from "./FileInput.style";

const FormFileInput = ({
  name,
  accept,
  onChangeHandler,
}: InputProps): JSX.Element => {
  return (
    <FileInputContainer>
      <>
        <Input
          type="file"
          name={name}
          accept={accept}
          onChange={onChangeHandler}
        />
      </>
    </FileInputContainer>
  );
};

export default FormFileInput;
