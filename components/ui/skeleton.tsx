import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="group relative h-full min-h-[320px] sm:min-h-[360px] overflow-hidden border-0 rounded-lg">
      <Skeleton className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
        <Skeleton className="h-6 w-3/4 mb-3 bg-white/20" />
        <Skeleton className="h-4 w-full mb-2 bg-white/10" />
        <Skeleton className="h-4 w-5/6 bg-white/10" />
      </div>
    </div>
  )
}

export function ImageSkeleton({ aspectRatio = "16/9" }: { aspectRatio?: string }) {
  return (
    <Skeleton
      className="w-full"
      style={{ aspectRatio }}
    />
  )
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  )
}

