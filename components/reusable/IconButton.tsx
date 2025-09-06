import React from "react";
import { IconType } from "react-icons";

interface BtnProps {
  icon: IconType;
  size:number
}

const IconButton: React.FC<BtnProps> = ({ icon: Icon , size }) => {
  return (
    <div className="bg-streamr p-1 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
      <Icon className="text-black" size={size} />
    </div>
  );
};

export default IconButton;

