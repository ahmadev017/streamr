
import Image from "next/image";
import PlayPauseBtn from "./PlayPauseBtn";

interface Item {
  name: string;
  image: string;
}
interface HomeProps {
  title: string;
  pl: number;
  data: Item[];
}

const ProfileSections: React.FC<HomeProps> = ({ title, data, pl }) => {

  return (
    <div className="flex flex-col relative group">
      {" "}
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((item, index) => (
         
           <div key={index} className="cursor-pointer flex flex-col gap-2 hover:bg-gray-300 dark:hover:bg-gray-800  p-3 rounded-md transition-colors duration-300">
            <div className="relative aspect-square group/card rounded-md overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover"/>
              <PlayPauseBtn/>
            </div>
        <p className="text-xs font-md text-muted-foreground" style={{ paddingLeft: pl }}>{item.name}</p>
      </div>
    
     ))}
    </div>      
    </div>
  );
};

export default ProfileSections;