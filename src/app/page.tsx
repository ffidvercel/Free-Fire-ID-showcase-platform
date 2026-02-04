import { getGameIds, SUPPORT_PHONE } from "@/lib/data";
import IdCard from "@/components/id-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Home() {
  const gameIds = getGameIds();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tighter">
          Find Your Perfect Game ID
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Browse our curated selection of high-quality game accounts. All transactions are handled directly and privately.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {gameIds.map((id, index) => (
          <IdCard key={id.id} gameId={id} priority={index < 2} />
        ))}
      </div>

      <section className="mt-20 bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
        <h2 className="text-3xl font-headline font-bold text-primary mb-4">Want to Sell Your ID?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          We help you find the right buyer for your premium game accounts. Safe, secure, and direct deals.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8" asChild>
          <a
            href={`https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("I want to sell my ID on FFID VERCEL")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Sell Your ID Now
          </a>
        </Button>
      </section>
    </div>
  );
}
