"use client"
import { createContext, useState, useContext, ReactNode } from "react";

interface LoginContextType {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used inside LoginProvider");
  return context;
};
