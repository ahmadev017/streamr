import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Suspense } from "react";
import SongRow from "./SongRow";
import SongRowSkeleton from "./SongRowSkeleton";
import { getLikedSongs } from "@/lib/liked";

const LikedTable = async () => {
  const likedSongs = await getLikedSongs();

  return (
    <Table className="text-muted-foreground">
      <TableCaption>A list of your liked songs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Song</TableHead>
          <TableHead className="hidden sm:table-cell">Artist</TableHead>
          <TableHead className="hidden md:table-cell">Date Added</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Play</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {likedSongs.map((songPromise, index) => (
          <Suspense key={index} fallback={<SongRowSkeleton />}>
            <SongRow songPromise={songPromise} />
          </Suspense>
        ))}
      </TableBody>
    </Table>
  );
};

export default LikedTable;

