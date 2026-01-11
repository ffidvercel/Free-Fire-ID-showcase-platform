
'use client';

import Link from "next/link";
import Image from "next/image";
import { GameID } from "@/lib/data";
import { siteConfig } from "@/lib/config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Zap, Lock, ShoppingCart } from "lucide-react";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);

  return (
    <Link href={`/ids/${gameId.id}`} className="block transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group">
      <Card className="flex flex-col overflow-hidden h-full">
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
          <h3 className="font-headline text-lg font-semibold truncate text-primary">{gameId.title}</h3>
          <p className="text-2xl font-bold text-accent mt-1">₹{gameId.price.toLocaleString('en-IN')}</p>
        </CardContent>
        <CardFooter className="p-4 pt-2 flex flex-col items-stretch gap-3">
          <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
            <a href={`https://wa.me/${siteConfig.seller.whatsapp}?text=I'm interested in the account: ${gameId.title} (ID: ${gameId.id})`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full">
             <div className="w-full text-sm font-medium text-accent inline-flex items-center justify-center group-hover:underline">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
