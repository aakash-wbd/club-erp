import type { InputProps } from "antd"; // Import InputProps
import { Flex, Input, Typography } from "antd";
import { FC } from "react";

type TextBoxProps = {
  label?: string;
  helperText?: string;
} & InputProps;

const TextBox: FC<TextBoxProps> = ({ label = "", helperText, ...props }) => {
  return (
    <Flex vertical gap={2}>
      {label && (
        <Typography.Text className="text-md font-semibold">
          {label}
        </Typography.Text>
      )}
      <Input {...props} />
      {helperText && (
        <Typography.Text className="text-xs" type="danger">
          {helperText}
        </Typography.Text>
      )}
    </Flex>
  );
};

export default TextBox;
