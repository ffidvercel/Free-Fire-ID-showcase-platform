export default function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} FFID Hub. All Rights Reserved.</p>
        <p className="mt-1 text-xs">
          FFID Hub is an independent platform and is not affiliated with Garena, Krafton, or any other game developer.
        </p>
      </div>
    </footer>
  );
}
