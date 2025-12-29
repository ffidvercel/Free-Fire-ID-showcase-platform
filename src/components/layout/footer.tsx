
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <div className="flex justify-center gap-4 mb-2">
            <Link href="/policy" className="underline hover:text-accent">Policy</Link>
            <Link href="/LICENSE" className="underline hover:text-accent">License</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} FFID VERCEL. All Rights Reserved.</p>
        <p className="mt-1 text-xs">
          This platform is an independent project and is not affiliated with Garena, Krafton, or any other game developer.
        </p>
      </div>
    </footer>
  );
}
