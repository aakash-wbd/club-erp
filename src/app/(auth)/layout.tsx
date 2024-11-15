import { Flex } from "antd";
import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const layout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Flex className="min-h-screen">
      <div className="w-full lg:w-1/2 p-10 flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-[url('https://www.shutterstock.com/image-vector/vector-futuristic-technology-background-electronic-600nw-1676268814.jpg')] bg-no-repeat bg-cover"></div>
    </Flex>
  );
};

export default layout;
