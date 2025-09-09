
import LoginHeader from "@/components/LoginPage/LoginHeader";
import { LoginProvider } from "@/context/LoginProvider";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <LoginProvider>
      <LoginHeader />
      {children}
    </LoginProvider>
  );
};

export default layout;
