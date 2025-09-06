import { Sidebar } from "@/components/ui/sidebar";
import { getPlaying } from "@/lib/playing";
import Image from "next/image";
import IconButton from "../reusable/IconButton";
import { TiTick } from "react-icons/ti";

export const RightSidebar: React.FC = () => {
  const playingData = getPlaying();
  return (
    <Sidebar
      side="right"
      className="hidden lg:flex overflow-y-auto custom-scrollbar  flex-col gap-4 rounded-md h-[calc(100vh-115px)] mt-[60px]"
      style={{ overflow: "overlay" }}
    >
      <div className="flex flex-col p-2 py-6 gap-4 bg-secondary transition-colors duration-300 ">
        <h1 className="text-md font-bold">{playingData.title}</h1>
        <div className="flex flex-col gap-1">
          <div className="relative w-full aspect-square">
            <Image
              src={playingData.image}
              alt="playing"
              fill
              className="object-contain"
            />
          </div>

          {/* Artist Info */}
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
              <h1 className="text-md font-bold">{playingData.title}</h1>
            <p className="text-sm text-muted-foreground">
              {playingData.artist}
            </p>
            </div>
            <div>
              <IconButton icon={TiTick} size={15}/>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full aspect-square">
            <Image
              src={playingData.artistImage}
              alt="artist"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col pl-2">
            <h1 className="text-md font-bold">{playingData.artist}</h1>
            <p className="text-sm text-muted-foreground">
              {playingData.monthlyListners} monthly listeners
            </p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default RightSidebar;
