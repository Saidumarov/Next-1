import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      {data?.map((_, i) => (
        <div
          key={i}
          className="xl:w-1/4 max-[1270px]:w-1/3 max-[975px]:w-1/2 max-[550px]:w-full p-4"
        >
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[300px]  rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-[90%]" />
              <Skeleton className="h-6 w-[80%]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
