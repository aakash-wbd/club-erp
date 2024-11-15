import type { InputProps } from "@fluentui/react-components";
import { Input, Label } from "@fluentui/react-components";
import { FC } from "react";

type TextBoxProps = {
  label?: string;
} & InputProps;

const TextBox: FC<TextBoxProps> = ({ label = "", ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <Label size={props.size} disabled={props.disabled}>
        {label}
      </Label>
      <Input {...props} />
    </div>
  );
};

export default TextBox;
