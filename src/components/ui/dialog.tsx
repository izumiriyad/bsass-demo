"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onClose, children, className }: DialogProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-md rounded-t-2xl border border-[#2a2c30] bg-[#1b1c1e] p-5 shadow-2xl sm:rounded-xl sm:p-6",
          "max-h-[90vh] overflow-y-auto",
          "animate-modal-slide-up sm:animate-modal-center",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("mb-4 text-xl font-bold text-[#f0f0f0]", className)}>
      {children}
    </h2>
  );
}
