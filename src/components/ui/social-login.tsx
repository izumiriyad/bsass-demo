"use client";

import * as React from "react";
import { Loader as Loader2 } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialButtonProps extends Omit<ButtonProps, "children"> {
  provider: "google" | "facebook" | "apple" | "twitter";
  loading?: boolean;
}

const PROVIDER_CONFIG: Record<
  SocialButtonProps["provider"],
  { name: string; icon: React.ReactNode; className: string }
> = {
  google: {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.23v2.84C4.13 20.49 7.76 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.76 1 4.13 3.51 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
    className: "border-border hover:bg-muted",
  },
  facebook: {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-[#1877F2]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    className: "border-border hover:bg-muted",
  },
  apple: {
    name: "Apple",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.32.03-1.76-.79-3.3-.78-1.54.01-2.02.82-3.31.82-1.31.01-2.3-1.15-3.17-2.38-2.12-3.01-2.32-6.52-.93-8.39.99-1.29 2.58-2.09 4.05-2.09 1.41 0 2.3.8 3.47.8 1.21 0 1.95-.8 3.3-.8a4.4 4.4 0 012.79 1.29c-.7.4-1.35.91-1.86 1.54a4.51 4.51 0 00.03 5.04zm-3.96-12.1c.67-.9 1.15-2.1.99-3.39-1.21.09-2.55.84-3.3 1.85-.65.88-1.2 2.09-.99 3.27a3.73 3.73 0 003.3-1.73z" />
      </svg>
    ),
    className: "border-border bg-foreground text-background hover:bg-foreground/90",
  },
  twitter: {
    name: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    className: "border-border hover:bg-muted",
  },
};

export function SocialLoginButton({
  provider,
  loading,
  className,
  disabled,
  ...props
}: SocialButtonProps) {
  const config = PROVIDER_CONFIG[provider];

  return (
    <Button
      variant="outline"
      type="button"
      disabled={disabled || loading}
      className={cn("w-full gap-2", config.className, className)}
      {...props}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        config.icon
      )}
      Continue with {config.name}
    </Button>
  );
}

export function SocialLoginGroup({
  className,
}: {
  className?: string;
}) {
  const [loading, setLoading] = React.useState<string | null>(null);

  const handleClick = (provider: SocialButtonProps["provider"]) => {
    setLoading(provider);
    setTimeout(() => setLoading(null), 2000);
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-3">
        <SocialLoginButton
          provider="google"
          loading={loading === "google"}
          onClick={() => handleClick("google")}
        />
        <div className="grid grid-cols-2 gap-3">
          <SocialLoginButton
            provider="facebook"
            loading={loading === "facebook"}
            onClick={() => handleClick("facebook")}
          />
          <SocialLoginButton
            provider="apple"
            loading={loading === "apple"}
            onClick={() => handleClick("apple")}
          />
        </div>
      </div>
    </div>
  );
}
