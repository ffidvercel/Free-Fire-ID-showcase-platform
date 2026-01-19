
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
import { ArrowRight, Star, ShieldCheck, Zap, Lock, ShoppingCart } from "lucide-react";

interface IdCardProps {
  gameId: GameID;
  priority?: boolean;
}

export default function IdCard({ gameId, priority = false }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(gameId.price);
  const whatsappLink = `https://wa.me/${gameId.contact.whatsapp.replace(/\+/g, "")}?text=Hi, I'm interested in buying your product '${gameId.title}' for '${formattedPrice}'`;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border rounded-lg">
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
                  quality={50}
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
          <Link href={`/ids/${gameId.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <h3 className="font-headline text-lg font-semibold truncate text-primary group-hover:underline">{gameId.title}</h3>
          </Link>
          <p className="text-2xl font-bold text-accent mt-1">{formattedPrice}</p>
        </CardContent>
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
          <div className="w-full flex items-center gap-2">
            <Button asChild className="w-full" variant="outline">
              <Link href={`/ids/${gameId.id}`}>
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Buy Now
              </Link>
            </Button>
          </div>
        </CardFooter>
    </Card>
  );
}
