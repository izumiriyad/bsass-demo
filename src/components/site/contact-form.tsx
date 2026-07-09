"use client";

import * as React from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("Message sent! We'll reply within 24 hours.");
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="size-10 text-emerald-400" />
        <p className="font-semibold">Thanks for reaching out!</p>
        <p className="text-sm text-muted-foreground">
          Our support team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" required placeholder="How can we help?" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us more…"
          className="flex w-full rounded-md border border-input bg-input/40 px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring"
        />
      </div>
      <Button type="submit" variant="gradient" disabled={loading}>
        {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Send message
      </Button>
    </form>
  );
}
