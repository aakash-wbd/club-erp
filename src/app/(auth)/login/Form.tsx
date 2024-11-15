"use client";
import CheckBox from "@/components/ui/CheckBox";
import TextBox from "@/components/ui/TextBox";
import { Button, Typography } from "antd";

const Form = () => {
  return (
    <form className="flex flex-col gap-2">
      <Typography.Text className="text-3xl font-semibold">
        Welcome Back
      </Typography.Text>
      <Typography.Text className="text-sm">
        Enter your email to receive a one-time password
      </Typography.Text>
      <TextBox label="Email" placeholder="Enter your email" />
      <CheckBox label="Remember Me" />
      <Button type="primary" className="mt-2">
        Send 4-digit code
      </Button>
    </form>
  );
};

export default Form;
