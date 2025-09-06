"use client"
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../ui/button";
import Image from "next/image";
import { useLogin } from "@/context/LoginProvider";

const LoginHeader = () => {
  const { isLogin , setIsLogin } = useLogin();
  return (
    <div className="py-3 w-full px-3 bg-secondary sm:px-10 flex items-center justify-between border-b border-border transition-all duration-300 sticky">
      <div className="flex gap-2">
        <Image src="/logo.png" width={20} height={20} alt="logo" />
        <h1 className="text-[18px] font-bold">Streamr</h1>
      </div>

      <div className="flex items-center space-x-2">
        <Button
        onClick={()=>setIsLogin(true)}
          className="cursor-pointer hidden sm:block"
          variant="customRed"
          radius="full"
          size="md"
        >
          Login
        </Button>
        <Button
          onClick={()=>setIsLogin(false)}
          className="cursor-pointer hidden sm:block"
          size="md"
          variant={"customgray"}
          radius={"full"}
        >
          Sign up
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default LoginHeader;
