import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Mir Mohmmad Luqman. All Rights Reserved. <Link href="/policy" className="underline">Legal</Link></p>
        <p className="mt-1 text-xs">
          This platform is an independent project and is not affiliated with Garena, Krafton, or any other game developer.
        </p>
      </div>
    </footer>
  );
}
