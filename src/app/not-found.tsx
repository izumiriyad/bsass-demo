import Link from "next/link";
import { Home, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <Logo />
      <div className="mt-10 text-7xl font-black text-gradient">404</div>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">
        This page took a loss
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back in the game.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild variant="gradient">
          <Link href="/">
            <Home className="size-4" /> Go home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/games">
            <Gamepad2 className="size-4" /> Browse games
          </Link>
        </Button>
      </div>
    </div>
  );
}
