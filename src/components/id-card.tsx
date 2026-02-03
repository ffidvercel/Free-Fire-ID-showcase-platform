
import Link from "next/link";
import Image from "next/image";
import { GameID } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { formatNumber } from "@/lib/format";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Star, ShieldCheck, Zap, MessageCircle, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

const formatLikes = (likes: number) => {
  if (likes >= 1000) {
    return `${(likes / 1000).toFixed(1)}k`;
  }
  return likes;
};

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);
  const message = `I'm interested in the "${gameId.title}" account (ID: ${gameId.id}). Price: ₹${formatNumber(gameId.price)}. Is it still available?`;
  const whatsappLink = `https://wa.me/${gameId.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg md:hover:-translate-y-1 focus-within:shadow-lg rounded-xl border-muted/50">
      <Link href={`/ids/${gameId.id}`} className="block focus-visible:outline-none group">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt={gameId.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={priority}
              />
            )}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              <Badge className="bg-black/60 backdrop-blur-md text-white border-none text-[10px] py-0 px-1.5">
                <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400 mr-1" />
                Lv. {gameId.level}
              </Badge>
            </div>
            <div className="absolute bottom-2 right-2">
                <Badge className="bg-accent/90 backdrop-blur-sm text-white border-none text-[10px] py-0 px-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Direct Deal | UPI
                </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-3 pb-1">
          <h3 className="font-headline text-sm md:text-base font-bold truncate text-primary leading-tight">{gameId.title}</h3>
          <div className="flex justify-between items-end mt-1">
            <div>
                <p className="text-xs text-muted-foreground line-through opacity-50 leading-none">₹{formatNumber(gameId.price * 1.2)}</p>
                <p className="text-lg md:text-xl font-black text-accent leading-none mt-0.5">₹{formatNumber(gameId.price)}</p>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-[10px] bg-muted/30 px-1.5 py-0.5 rounded">
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>{formatLikes(gameId.likes)}</span>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-3 pt-1 flex-col items-start gap-2">
        <div className="flex flex-wrap gap-1.5 text-[10px] text-muted-foreground min-h-[16px]">
          {gameId.isVerified && <div className="flex items-center gap-1 bg-green-500/10 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded">
            <ShieldCheck className="w-3 h-3" />
            <span>Verified</span>
          </div>}
          {gameId.hasInstantTransfer && <div className="flex items-center gap-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded">
            <Zap className="w-3 h-3" />
            <span>Fast</span>
          </div>}
        </div>
        <div className="w-full flex gap-1.5">
          <Button asChild size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white text-[10px] h-8 px-2 font-bold shadow-sm shadow-green-900/20">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 h-3.5 w-3.5" />
              WhatsApp
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="px-2 h-8 border-accent/20 text-accent hover:bg-accent/5">
            <Link href={`/ids/${gameId.id}`}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
