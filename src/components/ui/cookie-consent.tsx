"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "playverse-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm p-4 animate-slide-up"
      )}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium">
            We use cookies to enhance your experience
          </p>
          <p className="text-xs text-muted-foreground">
            By continuing to browse, you agree to our use of cookies for
            authentication, preferences, and analytics.{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button variant="gradient" size="sm" onClick={accept}>
            Accept cookies
          </Button>
        </div>
        <button
          onClick={decline}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 sm:hidden"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
