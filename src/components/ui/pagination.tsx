"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal as MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingsCount?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingsCount = 1,
  className,
}: PaginationProps) {
  const pages = React.useMemo(() => {
    const range: (number | string)[] = [];
    const left = Math.max(1, currentPage - siblingsCount);
    const right = Math.min(totalPages, currentPage + siblingsCount);

    if (left > 1) {
      range.push(1);
      if (left > 2) range.push("...");
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages) {
      if (right < totalPages - 1) range.push("...");
      range.push(totalPages);
    }

    return range;
  }, [currentPage, totalPages, siblingsCount]);

  if (totalPages <= 1) return null;

  return (
    <nav
      className={cn("flex items-center justify-center gap-1", className)}
      aria-label="Pagination"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {pages.map((page, i) =>
        typeof page === "number" ? (
          <Button
            key={`${page}-${i}`}
            variant={page === currentPage ? "default" : "ghost"}
            size="sm"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "min-w-[2.25rem]",
              page === currentPage && "glow-primary"
            )}
          >
            {page}
          </Button>
        ) : (
          <span
            key={`ellipsis-${i}`}
            className="flex items-center justify-center px-2 text-muted-foreground"
          >
            <MoreHorizontal className="size-4" />
          </span>
        )
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </Button>
    </nav>
  );
}

export function PaginationInfo({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}) {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <p className="text-sm text-muted-foreground">
      Showing <span className="font-medium">{start}</span> to{" "}
      <span className="font-medium">{end}</span> of{" "}
      <span className="font-medium">{totalItems.toLocaleString()}</span> items
      {totalPages > 1 && (
        <>
          {" "}
          · Page <span className="font-medium">{currentPage}</span> of{" "}
          <span className="font-medium">{totalPages}</span>
        </>
      )}
    </p>
  );
}
