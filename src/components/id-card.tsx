
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
import { ArrowRight, Star, ShieldCheck, Zap, MessageCircle, Heart } from "lucide-react";
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
            <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-[10px] sm:text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>Lv. {gameId.level}</span>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-medium py-0.5 px-1.5 rounded flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 text-green-400" />
              <span>Direct Deal | UPI</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-3 sm:p-4 pb-1 sm:pb-2">
          <h3 className="font-headline text-sm sm:text-lg font-semibold truncate text-primary">{gameId.title}</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
            <p className="text-lg sm:text-2xl font-bold text-accent">₹{formatNumber(gameId.price)}</p>
            <div className="flex items-center gap-1 text-muted-foreground text-[10px] sm:text-sm mt-0.5 sm:mt-0">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
              <span>{formatLikes(gameId.likes)}</span>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-3 sm:p-4 pt-0 sm:pt-1 flex-col items-start gap-2 sm:gap-3">
        <div className="hidden sm:block space-y-1.5 text-xs text-muted-foreground w-full h-[40px]">
          {gameId.isVerified && <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
            <span>Verified account</span>
          </div>}
          {gameId.hasInstantTransfer && <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>Instant transfer</span>
          </div>}
        </div>
        <div className="w-full grid grid-cols-2 gap-1.5 sm:gap-2">
          <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white h-8 sm:h-10">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-[10px] sm:text-sm">Chat</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full text-accent h-8 sm:h-10">
            <Link href={`/ids/${gameId.id}`}>
              <span className="text-[10px] sm:text-sm">Details</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 hidden sm:block" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
