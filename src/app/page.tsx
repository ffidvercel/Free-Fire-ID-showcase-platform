import { getGameIds, SUPPORT_PHONE } from "@/lib/data";
import IdCard from "@/components/id-card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

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
          <IdCard key={id.id} gameId={id} priority={index < 4} />
        ))}
      </div>

      <section className="mt-20 bg-primary/5 rounded-3xl p-8 text-center border border-primary/10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Ready to cash out?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
            Want to Sell Your Account?
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We help you find the right buyer for your premium game ID. Get the best value for your hard-earned progress.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 h-14 text-lg rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <a href={`https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("I want to sell my game ID.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Sell Your ID via WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            * Direct deals only. No middleman fees.
          </p>
        </div>
      </section>
    </div>
  );
}
