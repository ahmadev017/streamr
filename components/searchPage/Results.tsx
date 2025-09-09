import Image from "next/image";
import React from "react";
import IconButton from "../reusable/IconButton";
import { GoPlus } from "react-icons/go";

interface ResultProps {
  item: {
    image: string;
    name: string;
    artist: string;
  };
}

const Results: React.FC<ResultProps> = ({ item }) => {
  return (
    <div className="mx-6 flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image
          src={item.image}
          alt={item.name}
          height={40}
          width={40}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-bold">{item.name}</h1>
          <p className="text-xs font-medium text-muted-foreground">
            {item.artist}
          </p>
        </div>
      </div>
      <IconButton icon={GoPlus} size={20} />
    </div>
  );
};

export default Results;

