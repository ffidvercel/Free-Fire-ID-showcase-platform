import { getGameIds } from "@/lib/data";
import IdCard from "@/components/id-card";
import HomeClient from "@/components/home-client";

export default function Home() {
  const gameIds = getGameIds();

  return (
    <HomeClient>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tighter">
            Find Your Perfect Game ID
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse our curated selection of high-quality game accounts. All transactions are handled directly and privately.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gameIds.map((id) => (
            <IdCard key={id.id} gameId={id} />
          ))}
        </div>
      </div>
    </HomeClient>
  );
}
