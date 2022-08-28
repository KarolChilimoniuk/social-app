import { SubmitInput } from "./SubmitInput.style";
import { InputProps } from "../../services/types/types";

const SubInput = ({ value }: InputProps): JSX.Element => {
  return <SubmitInput type="submit" value="Sign up" />;
};

export default SubInput;
