
'use client';
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
import { ArrowRight, Star, ShieldCheck, Zap, Lock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SELLER_WHATSAPP_NUMBER } from "@/lib/config";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);
  const whatsappMessage = `Hi, I'm interested in buying this game ID: ${gameId.title} (ID: ${gameId.id}). Price: ₹${gameId.price.toLocaleString('en-IN')}. Is it still available?`;
  const whatsappUrl = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg">
      <Link href={`/ids/${gameId.id}`} className="block focus:outline-none group">
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
        <CardContent className="flex-grow p-4 pb-2">
          <h3 className="font-headline text-lg font-semibold truncate text-primary group-hover:underline">{gameId.title}</h3>
          <p className="text-2xl font-bold text-accent mt-1">₹{gameId.price.toLocaleString('en-IN')}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex-col items-start gap-3 mt-auto">
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
        <div className="w-full grid grid-cols-2 gap-2 pt-2">
            <Button asChild variant="outline">
                <Link href={`/ids/${gameId.id}`}>
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            <Button asChild>
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                </Link>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
