import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-52px)] max-w-lg flex-col items-center justify-center px-4 py-10 text-center">
      <span
        className="text-7xl font-black italic text-[#f5a623]"
        style={{ textShadow: "0 6px 24px rgba(245,166,35,0.35)" }}
      >
        404
      </span>
      <h1 className="mt-3 text-2xl font-black text-white">Page Not Found</h1>
      <p className="mt-2 text-sm text-[#8a8aa0]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back in the game.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
        >
          ← Back to Home
        </Link>
        <Link
          href="/games"
          className="rounded-full border border-[#2a2a3e] bg-[#1e1e2d] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#2a2a3e]"
        >
          Browse Games
        </Link>
      </div>
    </div>
  );
}
