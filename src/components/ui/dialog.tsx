"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

function useDialogContext(component: string) {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error(`<${component}> must be used within <Dialog>`);
  }
  return ctx;
}

export function Dialog({
  children,
  defaultOpen = false,
}: {
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({
  children,
  asChild,
  className,
}: {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const { open, setOpen } = useDialogContext("DialogTrigger");

  if (asChild) {
    // Clone the single child element to inject onClick + className.
    const child = children as React.ReactElement<{
      onClick?: (e: React.MouseEvent) => void;
      className?: string;
    }>;
    return {
      ...child,
      props: {
        ...child.props,
        className: cn(child.props.className, className),
        onClick: (e: React.MouseEvent) => {
          child.props.onClick?.(e);
          if (!e.defaultPrevented) setOpen(!open);
        },
      },
    } as React.ReactElement;
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </button>
  );
}

export function DialogContent({
  children,
  className,
  onCloseAutoFocus,
}: {
  children: ReactNode;
  className?: string;
  onCloseAutoFocus?: () => void;
}) {
  const { open, setOpen } = useDialogContext("DialogContent");
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        onCloseAutoFocus?.();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, setOpen, onCloseAutoFocus]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => {
          setOpen(false);
          onCloseAutoFocus?.();
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-md rounded-xl border p-5 shadow-2xl animate-fade-in",
          className
        )}
        style={{ background: "#1e1e2d", borderColor: "#2a2a3e" }}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}
