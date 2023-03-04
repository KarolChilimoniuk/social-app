import { DateInputContainer, InputLabel, Input } from "./BirthDate.style";
import { InputProps } from "../../types/types";

const BirthDateInput = ({ onChangeHandler }: InputProps): JSX.Element => {
  return (
    <DateInputContainer>
      <InputLabel htmlFor="birthDate">Birth date</InputLabel>
      <Input
        type="date"
        id="birthDate"
        name="birthDate"
        onChange={onChangeHandler}
      />
    </DateInputContainer>
  );
};

export default BirthDateInput;
