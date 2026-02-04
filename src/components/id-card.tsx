
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
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg focus-within:-translate-y-1">
      <Link href={`/ids/${gameId.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-t-lg group">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full">
            {mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt={gameId.title}
                fill
                className="object-cover"
                priority={priority}
              />
            )}
            <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>Lv. {gameId.level}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-3 sm:p-4 pb-2">
          <h3 className="font-headline text-base sm:text-lg font-semibold truncate text-primary">{gameId.title}</h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xl sm:text-2xl font-bold text-accent">₹{formatNumber(gameId.price)}</p>
            <div className="flex items-center gap-1 text-muted-foreground text-xs sm:text-sm">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
              <span>{formatLikes(gameId.likes)}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 w-fit px-2 py-0.5 rounded-full border border-green-500/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>Direct Deal | UPI</span>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-3 sm:p-4 pt-0 sm:pt-2 flex-col items-start gap-2 sm:gap-3">
        <div className="space-y-1 text-[10px] sm:text-xs text-muted-foreground w-full h-[32px] sm:h-[40px] overflow-hidden">
          {gameId.isVerified && <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
            <span className="truncate">Verified account</span>
          </div>}
          {gameId.hasInstantTransfer && <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500" />
            <span className="truncate">Instant transfer</span>
          </div>}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button asChild variant="outline" size="sm" className="w-full text-accent group text-xs sm:text-sm order-2 sm:order-1">
            <Link href={`/ids/${gameId.id}`}>
              Details
              <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm order-1 sm:order-2">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Contact
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
