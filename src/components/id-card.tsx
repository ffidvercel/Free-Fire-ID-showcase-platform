
import Link from "next/link";
import Image from "next/image";
import { GameID } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Zap, Lock, MessageCircle } from "lucide-react";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);

  const whatsappLink = `https://wa.me/${gameId.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(`I'm interested in the "${gameId.title}" game ID. Is it still available?`)}`;

  return (
    <div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg group border overflow-hidden flex flex-col">
      <Link href={`/ids/${gameId.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
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
        <CardContent className="p-4 pb-2">
          <h3 className="font-headline text-lg font-semibold truncate text-primary">{gameId.title}</h3>
          <p className="text-2xl font-bold text-accent mt-1">₹{gameId.price.toLocaleString('en-IN')}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 mt-auto flex flex-col items-start gap-3">
        <div className="space-y-1.5 text-xs text-muted-foreground w-full h-[60px]">
          {gameId.isVerified && <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
            <span>Verified account</span>
          </div>}
          {gameId.hasInstantTransfer && <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>Instant transfer</span>
          </div>}
          {gameId.isPrivateAndSecure && <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-gray-500" />
            <span>Private & secure</span>
          </div>}
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <Link href={`/ids/${gameId.id}`} passHref>
            <Button variant="outline" className="w-full">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button asChild className="w-full bg-green-500 hover:bg-green-600">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Buy Now
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </div>
  );
}
