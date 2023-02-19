import { TextAreaContainer, Textarea } from "./TextArea.style";
import { TextAreaProps } from "../../types/types";

const TextArea = ({
  placeholder,
  name,
  onChangeHandler,
  value,
  width,
  height,
  rows,
  cols,
}: TextAreaProps): JSX.Element => {
  return (
    <TextAreaContainer theme={width || "210px"}>
      <>
        <Textarea
          placeholder={placeholder}
          name={name}
          value={value}
          rows={rows}
          cols={cols}
          onChange={onChangeHandler}
        />
      </>
    </TextAreaContainer>
  );
};

export default TextArea;
