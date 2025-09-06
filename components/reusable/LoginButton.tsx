import React from "react";
import { Button } from "../ui/button";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

interface LoginButtonProps {
  name: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

const LoginButton: React.FC<LoginButtonProps> = ({ name, variant, size }) => {
  return (
    <Button
      type="submit"
      size={size}
      variant={variant}
      className="w-full cursor-pointer rounded-full"
    >
      {name}
    </Button>
  );
};

export default LoginButton;


