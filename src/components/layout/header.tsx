import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Gamepad2 className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold font-headline text-primary tracking-tighter">
              FFID VERCEL
            </span>
          </Link>
          <nav>
            <Button variant="ghost" asChild>
              <Link href="/policy">Our Policy</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/LICENSE">License</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
