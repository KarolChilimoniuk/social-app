import { InputProps } from "../../services/types/types";
import { InputContainer, Input } from "./FileInput.style";

const FileInput = ({ name, accept, value }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <>
        <Input type="file" name={name} accept={accept} value={value} />
      </>
    </InputContainer>
  );
};

export default FileInput;
