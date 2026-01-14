
import Image from "next/image";
import Link from "next/link";
import { GameID } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Zap, Lock, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);
  const whatsappMessage = `I'm interested in the "${gameId.title}" ID (Price: ${formatPrice(gameId.price)}). Can you please provide more details?`;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/ids/${gameId.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-t-lg">
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
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4 pb-2">
        <Link href={`/ids/${gameId.id}`}>
          <h3 className="font-headline text-lg font-semibold truncate text-primary hover:underline">{gameId.title}</h3>
        </Link>
        <p className="text-2xl font-bold text-accent mt-1">{formatPrice(gameId.price)}</p>
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
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button asChild variant="outline">
            <Link href={`/ids/${gameId.id}`} className="flex items-center justify-center">
              Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={`https://wa.me/${gameId.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Buy Now
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
