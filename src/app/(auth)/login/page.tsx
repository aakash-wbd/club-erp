"use client";
import CheckBox from "@/components/ui/CheckBox";
import TextBox from "@/components/ui/TextBox";
import { Button, Text } from "@fluentui/react-components";

const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col gap-2 justify-center h-full p-10 w-1/2 mx-auto">
        <Text as="h2" className="!text-3xl !font-semibold" block>
          Welcome back
        </Text>
        <Text as="p" className="!text-md" block>
          Enter your email to receive a one-time password
        </Text>
        <form className="flex flex-col gap-1">
          <TextBox label="Email" />
          <CheckBox label="Remember Me" />
          <Button appearance="primary">Send 4-digit code</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
