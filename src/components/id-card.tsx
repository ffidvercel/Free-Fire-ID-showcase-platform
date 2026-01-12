
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
import { formatCurrency } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);

  const handleBuyNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    const message = `Hi, I'm interested in buying the "${gameId.title}" (ID: ${gameId.id}). Is it still available?`;
    window.open(`https://wa.me/${siteConfig.seller.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group">
      <Card className="flex flex-col overflow-hidden h-full">
        <Link href={`/ids/${gameId.id}`} className="block">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              {mainImage && (
                <Image
                  src={mainImage.imageUrl}
                  alt={gameId.title}
                  fill
                  className="object-cover"
                  priority={priority}
                  unoptimized
                />
              )}
              <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>Lv. {gameId.level}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4 pb-2">
            <h3 className="font-headline text-lg font-semibold truncate text-primary">{gameId.title}</h3>
            <p className="text-2xl font-bold text-accent mt-1">{formatCurrency(gameId.price)}</p>
          </CardContent>
        </Link>
        <CardFooter className="p-4 pt-0 flex-col items-start gap-3">
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
          <Button asChild className="w-full">
            <a
              href={`https://wa.me/${siteConfig.seller.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in buying the "${gameId.title}" (ID: ${gameId.id}). Is it still available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy Now
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
