
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
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Zap, Lock } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

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
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
            <a
              href={`https://wa.me/${gameId.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" /> Buy Now
            </a>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
