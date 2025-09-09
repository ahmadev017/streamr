"use client"
import React from "react";
import { Button } from "../ui/button";
import { useLogin } from "@/context/LoginProvider";

interface btnProps {
  name: string;
  variant: "customRed" | "customgray";
  state: boolean;
}

const LoginHeadrBtn: React.FC<btnProps> = ({ name, variant, state }) => {
  const { isLogin, setIsLogin } = useLogin();
  return (
    <Button
      onClick={() => setIsLogin(state)}
      className="cursor-pointer hidden sm:block"
      variant={variant}
      radius="full"
      size="md"
    >
      {name}
    </Button>
  );
};

export default LoginHeadrBtn;
