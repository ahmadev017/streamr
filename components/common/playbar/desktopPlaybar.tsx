import IconButton from "@/components/reusable/IconButton";
import { TiTick } from "react-icons/ti";
import SongInfo from "./SongInfo";
import PlaybarControls from "./PlaybarControls";
import VolumeControl from "./VolumeControl";

const DesktopPlaybar = () => {
  return (
    <div className="py-1 hidden transition-colors duration-300 px-2 sm:flex items-center justify-between border-t border-border bg-secondary  sticky bottom-0 z-50 ">
      <SongInfo />

      <PlaybarControls />

      <VolumeControl />
    </div>
  );
};

export default DesktopPlaybar;
