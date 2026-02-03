import { getGameIds, SUPPORT_PHONE } from "@/lib/data";
import IdCard from "@/components/id-card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck, Zap, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const gameIds = getGameIds();

  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      <header className="text-center mb-8 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
            <Trophy className="w-3 h-3" />
            <span>India's Most Trusted ID Marketplace</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tighter leading-none">
          LEVEL UP YOUR <span className="text-accent">GAMING</span>
        </h1>
        <p className="text-base md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto font-medium">
          Buy & Sell Rare Free Fire and PUBG IDs with Confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs md:text-sm font-semibold text-muted-foreground">
            <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>100% Secure Deals</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-blue-500" />
                <span>Instant Access</span>
            </div>
        </div>
      </header>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-headline font-bold flex items-center gap-2">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                Featured IDs
            </h2>
            <Link href="#" className="text-accent text-sm font-bold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {gameIds.map((id, index) => (
            <IdCard key={id.id} gameId={id} priority={index < 2} />
            ))}
        </div>
      </section>

      {/* Sell Your ID CTA */}
      <section className="bg-gradient-to-br from-card to-accent/5 border border-accent/20 rounded-2xl p-6 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -ml-16 -mb-16"></div>

        <h2 className="text-2xl md:text-4xl font-headline font-black text-primary mb-4 relative z-10">WANT TO SELL YOUR ID?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
          Get the best price for your hard-earned game account. We help you find the right buyer quickly and safely.
        </p>
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-xl text-lg relative z-10 shadow-xl shadow-green-900/20">
          <a href={`https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent('Hi, I want to sell my game ID.')}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-6 w-6" />
            Sell via WhatsApp
          </a>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground font-medium">Trusted by 10,000+ Indian Sellers</p>
      </section>
    </div>
  );
}
