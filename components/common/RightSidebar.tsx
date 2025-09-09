import { Sidebar } from "@/components/ui/sidebar";
import { getPlaying } from "@/lib/playing";
import AboutSong from "./rightSidebar/AboutSong";
import AboutArtist from "./rightSidebar/AboutArtist";

export const RightSidebar: React.FC = () => {
  const playingData = getPlaying();
  return (
    <Sidebar side="right" className="hidden lg:flex overflow-y-auto custom-scrollbar  flex-col gap-4 rounded-md h-[calc(100vh-115px)] mt-[60px]">
      <div className="flex flex-col p-2 py-4 gap-4 bg-secondary transition-colors duration-300 ">
        <h1 className="text-md font-bold">{playingData.title}</h1>
        <AboutSong/>
        <AboutArtist/>
      </div>
    </Sidebar>
  );
};

export default RightSidebar;
