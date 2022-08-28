import { InputContainer, InputLabel, Input } from "./BirthDate.style";
import { InputProps } from "../../services/types/types";

const BirthDateInput = ({ onChangeHandler }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <InputLabel htmlFor="birthDate">Birth date</InputLabel>
      <Input
        type="date"
        id="birthDate"
        name="birthDate"
        onChange={onChangeHandler}
      />
    </InputContainer>
  );
};

export default BirthDateInput;
