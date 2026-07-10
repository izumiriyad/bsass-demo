"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dialog, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/components/providers/auth-provider";
import { useModal } from "@/components/providers/modal-provider";

export function RegisterModal() {
  const { modal, closeModal, openModal } = useModal();
  const { signIn } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!agree) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Registration failed");
      await signIn(username, password);
      toast.success("Account created! ৳500 welcome credit.");
      closeModal();
      router.push("/dashboard");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={modal === "register"} onClose={closeModal}>
      <DialogTitle>Create Your Account</DialogTitle>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#9ca3af]">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
            className="w-full rounded-lg border border-[#2a2c30] bg-[#121315] px-4 py-2.5 text-[#f0f0f0] placeholder:text-[#6b7280] outline-none transition focus:border-[#008d5b]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#9ca3af]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-[#2a2c30] bg-[#121315] px-4 py-2.5 text-[#f0f0f0] placeholder:text-[#6b7280] outline-none transition focus:border-[#008d5b]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#9ca3af]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full rounded-lg border border-[#2a2c30] bg-[#121315] px-4 py-2.5 text-[#f0f0f0] placeholder:text-[#6b7280] outline-none transition focus:border-[#008d5b]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#9ca3af]">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter password"
            className="w-full rounded-lg border border-[#2a2c30] bg-[#121315] px-4 py-2.5 text-[#f0f0f0] placeholder:text-[#6b7280] outline-none transition focus:border-[#008d5b]"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-[#9ca3af]">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-4 w-4 rounded border-[#2a2c30] bg-[#121315] accent-[#008d5b]"
          />
          I agree to the Terms &amp; Conditions and I am 18+ years old
        </label>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-2.5 text-sm disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
        <p className="text-center text-sm text-[#9ca3af]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => openModal("login")}
            className="font-semibold text-[#ffdf19] hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </Dialog>
  );
}
