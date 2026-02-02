import { getGameIds, SUPPORT_PHONE } from "@/lib/data";
import IdCard from "@/components/id-card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowRight, ShieldCheck, Zap, MessageCircle } from "lucide-react";
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
          <IdCard key={id.id} gameId={id} priority={index < 2} />
        ))}
      </div>

      {/* Sell Your ID CTA */}
      <section className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 border border-primary/20 relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <PlusCircle size={160} />
        </div>
        <div className="p-8 md:p-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
              Want to Sell Your Game ID?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our marketplace and connect with thousands of potential buyers in India. We help you get the best price for your hard-earned progress.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-medium">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-medium">Direct Deals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg text-purple-500">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium">Best Support</span>
              </div>
            </div>
            <Button size="lg" className="rounded-full px-8 text-lg group" asChild>
              <a href={`https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("Hi, I want to sell my game ID. Please tell me the process.")}`} target="_blank" rel="noopener noreferrer">
                Contact to Sell
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
