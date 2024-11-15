import { Checkbox, CheckboxProps } from "antd";
import { FC } from "react";

type CheckBoxProps = {
  label?: string;
} & CheckboxProps;

const CheckBox: FC<CheckBoxProps> = ({ label = "", ...props }) => {
  if (label) {
    return <Checkbox {...props}>{label}</Checkbox>;
  }

  return <Checkbox {...props} />;
};

export default CheckBox;
