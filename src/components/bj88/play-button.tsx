"use client";

import { toast } from "sonner";
import { useAuth } from "@/components/providers/auth-provider";
import { useModal } from "@/components/providers/modal-provider";

interface PlayButtonProps {
  gameId: string;
  gameTitle: string;
}

export function PlayButton({ gameId, gameTitle }: PlayButtonProps) {
  const { user } = useAuth();
  const { openModal } = useModal();

  if (!user) {
    return null;
  }

  const handlePlay = () => {
    toast.success(`Launching ${gameTitle}...`);
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      className="btn-primary w-full py-3 text-base font-semibold"
    >
      ▶ Play Now
    </button>
  );
}

export function LoginToPlayButton() {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      onClick={() => openModal("login")}
      className="btn-primary w-full py-3 text-base font-semibold"
    >
      Login to Play
    </button>
  );
}
