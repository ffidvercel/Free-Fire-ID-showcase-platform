
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
import { ArrowRight, Star, ShieldCheck, Zap, Lock } from "lucide-react";

interface IdCardProps {
  gameId: GameID;
}

export default function IdCard({ gameId }: IdCardProps) {
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
          <p className="text-2xl font-bold text-accent mt-1">₹{gameId.price.toLocaleString()}</p>
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
            <div className="w-full text-sm font-medium text-accent inline-flex items-center justify-center group-hover:underline">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
