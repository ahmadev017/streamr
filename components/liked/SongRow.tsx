"use client";

import { use } from "react";
import Image from "next/image";
import type { Song } from "@/lib/liked";
import { FaPause, FaPlay } from "react-icons/fa";
import { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";

export default function SongRow({ songPromise }: { songPromise: Promise<Song> }) {
  const song = use(songPromise);
  const [isPlayed, setIsPlayed] = useState(false);

  return (
    <TableRow>
      <TableCell className="font-medium">{song.sr}</TableCell>
      <TableCell className="flex text-xs items-center gap-3">
        <Image src={song.image} alt={song.title} width={40} height={40} className="rounded-md" />
        {song.title}
      </TableCell>
      <TableCell className="hidden sm:table-cell text-xs">{song.artist}</TableCell>
      <TableCell className="hidden md:table-cell text-xs">{song.added}</TableCell>
      <TableCell className="text-xs pl-4">{song.duration}</TableCell>
      <TableCell>
        <div className="rounded-full flex p-1 bg-streamr w-8 h-8 items-center justify-center">
          {!isPlayed ? (
            <button onClick={() => setIsPlayed(true)}>
              <FaPlay size={15} className="text-white" />
            </button>
          ) : (
            <button onClick={() => setIsPlayed(false)}>
              <FaPause size={15} className="text-white" />
            </button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}
