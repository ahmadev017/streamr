import { Skeleton } from "../ui/skeleton";

function LikedInfoSkeleton() {
  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[100px] w-[100px] rounded-lg" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="h-10 w-full rounded-full" />
    </div>
  );
}
export default LikedInfoSkeleton