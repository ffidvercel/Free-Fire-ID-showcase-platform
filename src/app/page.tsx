import { getGameIds, SUPPORT_PHONE } from "@/lib/data";
import IdCard from "@/components/id-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Zap, MessageCircle, Star, TrendingUp, Users, Smartphone, Trophy } from "lucide-react";

export default function Home() {
  const gameIds = getGameIds();
  const sellMessage = "Hi, I want to sell my game ID on FFID VERCEL. Please let me know the process.";
  const sellWhatsappUrl = `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent(sellMessage)}`;

  const trustPoints = [
    { icon: ShieldCheck, title: "100% Verified", desc: "Every ID is manually checked by our experts.", color: "text-green-500" },
    { icon: Zap, title: "Instant Access", desc: "Get account details immediately after verification.", color: "text-blue-500" },
    { icon: MessageCircle, title: "Direct Deals", desc: "No middleman, talk directly via WhatsApp/UPI.", color: "text-orange-500" },
    { icon: Trophy, title: "Rare Items", desc: "Exclusive skins and OG items you won't find elsewhere.", color: "text-yellow-500" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4" />
            <span>India's Most Trusted Game ID Marketplace</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Upgrade Your Gaming Journey with <span className="text-white">Premium IDs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Browse verified Free Fire, PUBG & more accounts. Secure, fast, and 100% reliable direct deals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full font-bold shadow-lg shadow-primary/20" asChild>
              <Link href="#listings">Browse All IDs</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full font-bold border-2" asChild>
              <a href={sellWhatsappUrl} target="_blank" rel="noopener noreferrer">
                Sell Your ID
              </a>
            </Button>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Stats/Trust Points */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-card border shadow-sm transition-transform hover:-translate-y-1">
                <div className={`p-3 rounded-full bg-muted mb-4 ${point.color}`}>
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary">{point.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Listings */}
      <section id="listings" className="container mx-auto px-4 py-16 scroll-mt-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Featured Listings</h2>
            <p className="text-muted-foreground mt-2">The best value accounts available right now.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-primary font-semibold">
             <Star className="w-5 h-5 fill-primary" />
             <span>Trending Now</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {gameIds.map((id, index) => (
            <IdCard key={id.id} gameId={id} priority={index < 2} />
          ))}
        </div>
      </section>

      {/* Sell Section */}
      <section className="container mx-auto px-4 py-16">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">Want to Sell Your Account?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                    Get the best value for your hard-earned game ID. Our platform connects you with genuine buyers across India.
                </p>
                <Button size="lg" className="h-14 px-10 rounded-full font-bold text-lg" asChild>
                    <a href={sellWhatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Contact on WhatsApp to Sell
                    </a>
                </Button>
              </div>

              {/* Decorative Icons */}
              <Smartphone className="absolute -bottom-4 -left-4 w-32 h-32 text-primary/10 -rotate-12 hidden lg:block" />
              <Users className="absolute -top-4 -right-4 w-32 h-32 text-primary/10 rotate-12 hidden lg:block" />
          </div>
      </section>

      {/* Social Section placeholder for BottomNav scroll */}
      <div id="follow-us-section" className="h-px" />
    </div>
  );
}
