"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border/70 p-12 text-center",
        className
      )}
    >
      {icon && (
        <div className="flex size-16 items-center justify-center rounded-full bg-muted">
          {icon}
        </div>
      )}
      <div className="space-y-2">
        <h3 className="font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
        )}
      </div>
      {action && (
        <Button
          variant="gradient"
          onClick={action.onClick}
          asChild={!!action.href}
        >
          {action.href ? <a href={action.href}>{action.label}</a> : action.label}
        </Button>
      )}
    </div>
  );
}

export function LoadingState({
  title = "Loading...",
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-12",
        className
      )}
    >
      <div className="relative">
        <div className="size-12 rounded-full border-4 border-muted" />
        <div className="absolute inset-0 size-12 animate-spin rounded-full border-4 border-transparent border-t-primary" />
      </div>
      <div className="text-center">
        <p className="font-medium">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  error,
  retry,
  className,
}: {
  title?: string;
  error?: string;
  retry?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border border-destructive/30 bg-destructive/10 p-12 text-center",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-destructive/20">
        <svg
          className="size-6 text-destructive"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.964-1.333-2.732 0L3.982 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold">{title}</h3>
        {error && (
          <p className="text-sm text-muted-foreground">{error}</p>
        )}
      </div>
      {retry && (
        <Button variant="outline" onClick={retry}>
          Try again
        </Button>
      )}
    </div>
  );
}
