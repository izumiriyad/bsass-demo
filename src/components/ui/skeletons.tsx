"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-skeleton rounded-md bg-muted",
        className
      )}
      {...props}
    />
  );
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border/60 bg-card/50 p-4", className)}>
      <Skeleton className="aspect-[3/4] w-full rounded-lg" />
      <Skeleton className="mt-3 h-4 w-3/4" />
      <Skeleton className="mt-2 h-3 w-1/2" />
    </div>
  );
}

function SkeletonGameGrid({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

function SkeletonTransactionRow() {
  return (
    <div className="flex items-center gap-3 p-4">
      <Skeleton className="size-9 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-48" />
      </div>
      <div className="text-right space-y-2">
        <Skeleton className="h-4 w-16 ml-auto" />
        <Skeleton className="h-3 w-12 ml-auto" />
      </div>
    </div>
  );
}

function SkeletonTransactionList({ count = 6 }: { count?: number }) {
  return (
    <div className="divide-y divide-border/60">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonTransactionRow key={i} />
      ))}
    </div>
  );
}

function SkeletonStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-border/60 bg-card/50 p-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-2 h-6 w-24" />
        </div>
      ))}
    </div>
  );
}

function SkeletonProfileHeader() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Skeleton className="size-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
      <Skeleton className="h-px w-full" />
    </div>
  );
}

function SkeletonTable({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden">
      <div className="border-b border-border/60 p-4 flex gap-4">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      <div className="divide-y divide-border/60">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4">
            {Array.from({ length: cols }).map((_, j) => (
              <Skeleton key={j} className="h-4 flex-1" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonCarousel() {
  return (
    <div className="rounded-2xl border border-border/60 overflow-hidden">
      <Skeleton className="h-[360px] sm:h-[420px] w-full" />
    </div>
  );
}

export {
  Skeleton,
  SkeletonCard,
  SkeletonGameGrid,
  SkeletonTransactionRow,
  SkeletonTransactionList,
  SkeletonStats,
  SkeletonProfileHeader,
  SkeletonTable,
  SkeletonCarousel,
};
