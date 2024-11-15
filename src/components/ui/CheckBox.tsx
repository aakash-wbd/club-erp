import { Checkbox, CheckboxProps } from "@fluentui/react-components";
import { FC } from "react";

type CheckBoxProps = CheckboxProps & {
  label?: string;
};

const CheckBox: FC<CheckBoxProps> = ({
  label,
  checked,
  onChange,
  ...props
}) => {
  return (
    <Checkbox label={label} checked={checked} onChange={onChange} {...props} />
  );
};

export default CheckBox;
