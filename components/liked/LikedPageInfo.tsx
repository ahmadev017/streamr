
import { Suspense, use } from "react";
import { getLikedSongs, type Song } from "@/lib/liked";
import LikedInfoSkeleton from "./LikedInfoSkeleton";
import LikedInfoContent from "./LikedInfoContent";






export default async function LikedPageInfo() {
  const likedSongs = await getLikedSongs();

  return (
    <Suspense fallback={<LikedInfoSkeleton />}>
      <LikedInfoContent songPromise={likedSongs[0]} />
    </Suspense>
  );
}

