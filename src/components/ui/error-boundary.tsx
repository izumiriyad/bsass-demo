"use client";

import * as React from "react";
import { TriangleAlert as AlertTriangle, RefreshCw, Hop as Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-destructive/15">
            <AlertTriangle className="size-8 text-destructive" />
          </div>
          <h2 className="text-xl font-bold">Something went wrong</h2>
          <p className="max-w-md text-sm text-muted-foreground">
            An error occurred while rendering this component. Please try
            refreshing the page or contact support if the issue persists.
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => this.setState({ hasError: false })}
            >
              <RefreshCw className="size-4" />
              Try again
            </Button>
            <Button variant="gradient" asChild>
              <a href="/">
                <Home className="size-4" />
                Go home
              </a>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ErrorFallback({
  error,
  reset,
}: {
  error?: Error;
  reset?: () => void;
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 p-8 text-center">
      <AlertTriangle className="size-10 text-destructive" />
      <h3 className="text-lg font-semibold">Unable to load content</h3>
      <p className="max-w-md text-sm text-muted-foreground">
        {error?.message || "Something went wrong. Please try again."}
      </p>
      {reset && (
        <Button variant="outline" onClick={reset}>
          <RefreshCw className="size-4" />
          Retry
        </Button>
      )}
    </div>
  );
}

export function NotFoundFallback({
  title = "Not found",
  description = "The content you're looking for doesn't exist or has been moved.",
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="text-6xl">🔍</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      {action || (
        <Button variant="gradient" asChild>
          <a href="/">Go home</a>
        </Button>
      )}
    </div>
  );
}
