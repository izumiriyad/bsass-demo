"use client";

import * as React from "react";
import { MessageCircle, X, Send, Loader as Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: Date;
}

export function LiveChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [minimized, setMinimized] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      sender: "agent",
      text: "Hi there! 👋 How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "Thanks for your message! A support agent will be with you shortly.",
        "I'm looking into that for you now. Please hold on a moment.",
        "Great question! Let me check our FAQ database for you.",
        "I understand. Could you please provide more details?",
      ];
      const agentMessage: Message = {
        id: Date.now().toString(),
        sender: "agent",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
      setTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating chat button */}
      <Button
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        className={cn(
          "fixed bottom-6 left-6 z-50 size-14 rounded-full shadow-lg",
          open && "hidden"
        )}
        variant="gradient"
        aria-label="Open live chat"
      >
        <MessageCircle className="size-6" />
        <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-emerald-500">
          <span className="size-2 rounded-full bg-white" />
        </span>
      </Button>

      {/* Chat window */}
      {open && (
        <div
          className={cn(
            "fixed left-6 bottom-6 z-50 w-80 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300",
            minimized ? "h-14" : "h-[480px]"
          )}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary to-fuchsia-600 p-3 cursor-pointer"
            onClick={() => setMinimized(!minimized)}
          >
            <div className="flex items-center gap-2 text-white">
              <MessageCircle className="size-5" />
              <div>
                <p className="text-sm font-semibold">Live Support</p>
                <p className="text-[11px] opacity-80">Online • Avg. reply 2m</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="rounded-full p-1 hover:bg-white/20"
              aria-label="Close chat"
            >
              <X className="size-4 text-white" />
            </button>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="h-[320px] overflow-y-auto p-3 space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex",
                      m.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-3 py-2 text-sm",
                        m.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-3 py-2 text-sm">
                      <span className="flex gap-1">
                        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
                        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
                        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={sendMessage}
                className="flex items-center gap-2 border-t border-border p-3"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                  disabled={typing}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || typing}
                  variant="gradient"
                >
                  {typing ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Send className="size-4" />
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
