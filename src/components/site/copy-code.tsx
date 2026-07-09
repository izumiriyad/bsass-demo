"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(`Bonus code ${code} copied!`);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually.");
    }
  }

  return (
    <Button onClick={copy} variant="outline" className="font-mono">
      {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
      {code}
    </Button>
  );
}
