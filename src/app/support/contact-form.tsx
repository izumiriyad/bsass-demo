"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent! Our team will reply within 24 hours.");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-name" className="text-xs font-semibold text-[#c8c8d6]">
            Name
          </label>
          <input
            id="c-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-email" className="text-xs font-semibold text-[#c8c8d6]">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-subject" className="text-xs font-semibold text-[#c8c8d6]">
          Subject
        </label>
        <input
          id="c-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What is this about?"
          className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-message" className="text-xs font-semibold text-[#c8c8d6]">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can help…"
          className="resize-none rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-fit rounded-lg px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
