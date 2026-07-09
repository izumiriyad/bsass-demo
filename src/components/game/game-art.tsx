import type { Game } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GameArtProps {
  game: Pick<Game, "gradient" | "emoji">;
  className?: string;
  emojiClassName?: string;
}

/** Renders a deterministic gradient + emoji "thumbnail" for a game. */
export function GameArt({ game, className, emojiClassName }: GameArtProps) {
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.9), transparent 42%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0 2px, transparent 2px 12px)",
        }}
      />
      <span className={cn("relative drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]", emojiClassName)}>
        {game.emoji}
      </span>
    </div>
  );
}
