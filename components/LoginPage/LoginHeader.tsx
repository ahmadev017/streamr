import React from "react";
import StreamrLogo from "../reusable/StreamrLogo";
import LoginHeadrBtn from "../reusable/LoginHeadrBtn";
import ThemeToggle from "../common/ThemeToggle";

const LoginHeader = () => {
  return (
    <div className="p-3 w-full bg-secondary sm:px-10 flex items-center justify-between border-b border-border transition-all duration-300 sticky">
      <StreamrLogo/>
      <div className="flex items-center space-x-2">
        <LoginHeadrBtn name="Login" variant="customRed" state={true}  />
        <LoginHeadrBtn name="Sign up" variant="customgray" state={false} />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default LoginHeader;
