"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/auth-provider";
import { useModal } from "@/components/providers/modal-provider";

export function ClaimButton({ promoId }: { promoId: string }) {
  const { user } = useAuth();
  const { openModal } = useModal();
  const [loading, setLoading] = useState(false);

  const handleClaim = async () => {
    if (!user) {
      openModal("register");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/promotions/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promoId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to claim");
      toast.success(data.message || "Promotion claimed successfully!");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to claim promotion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClaim}
      disabled={loading}
      className="btn-primary w-full py-3 text-base font-semibold disabled:opacity-50"
    >
      {loading ? "Claiming..." : user ? "Claim Now" : "Sign Up to Claim"}
    </button>
  );
}
