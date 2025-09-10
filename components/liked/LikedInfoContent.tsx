import Image from "next/image";
import SearchInput from "../reusable/SearchInput";
import { use } from "react";
import { Song } from "@/lib/liked";

function LikedInfoContent({ songPromise }: { songPromise: Promise<Song> }) {
  const song = use(songPromise); 

  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Image
          src={song.image}
          alt="liked"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex gap-6 items-center">
          <h1 className="text-lg font-bold">Liked Songs</h1>
        </div>
      </div>

      <div>
        <SearchInput placeholder="Search" paddingY="2" />
      </div>
    </div>
  );
}

export default LikedInfoContent