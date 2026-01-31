import { getGameIds } from "@/lib/data";
import IdCard from "@/components/id-card";
export default function Home() {
  const gameIds = getGameIds();

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-primary tracking-tighter">
          Find Your Perfect Game ID
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto">
          Browse our curated selection of high-quality game accounts. All transactions are handled directly and privately.
        </p>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {gameIds.map((id, index) => (
          <IdCard key={id.id} gameId={id} priority={index < 2} />
        ))}
      </div>
    </div>
  );
}
