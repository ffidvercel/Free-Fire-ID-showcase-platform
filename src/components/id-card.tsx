
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
import { ArrowRight, Star } from "lucide-react";

interface IdCardProps {
  gameId: GameID;
}

export default function IdCard({ gameId }: IdCardProps) {
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);
  
  return (
    <Link href={`/ids/${gameId.id}`} className="block transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
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
        <CardContent className="flex-grow p-4">
          <h3 className="font-headline text-lg font-semibold truncate text-primary">{gameId.title}</h3>
          <p className="text-2xl font-bold text-accent mt-2">₹{gameId.price.toLocaleString()}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
            <div className="w-full text-sm font-medium text-accent inline-flex items-center justify-center">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
