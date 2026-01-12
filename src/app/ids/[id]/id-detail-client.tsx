
'use client';

import type { GameID } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, Crown, CheckCircle, Gamepad2, AlertTriangle, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/config";
import { formatCurrency } from "@/lib/utils";

type Props = {
  gameId: GameID;
};

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);


export default function IdDetailClient({ gameId }: Props) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: gameId.title,
      text: gameId.description,
      url: window.location.href,
    };
    try {
      // Use Web Share API if available
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied!",
          description: "The link to this page has been copied to your clipboard.",
        });
      }
    } catch (err) {
      console.error('Failed to share: ', err);
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Could not share or copy the link.",
      });
    }
  };

  const galleryImages = gameId.gallery
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <Carousel className="w-full rounded-lg overflow-hidden border shadow-sm">
            <CarouselContent>
              {galleryImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative">
                    {img && <Image
                      src={img.imageUrl}
                      alt={`${gameId.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"

                    />}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14 sm:ml-16" />
            <CarouselNext className="mr-14 sm:mr-16" />
          </Carousel>

          {/* YouTube Video Embed */}
          {gameId.video && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                  🎬 Watch Video Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={gameId.video.replace('watch?v=', 'embed/')}
                    title={`${gameId.title} Video Preview`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Account Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{gameId.description}</p>
            </CardContent>
          </Card>

        </div>

        <div className="lg:col-span-2 space-y-6">
          <header>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  {gameId.title}
                </h1>
                <p className="text-3xl md:text-4xl font-bold text-accent mt-2">{formatCurrency(gameId.price)}</p>
              </div>
              <Button variant="outline" size="icon" onClick={handleShare} aria-label="Share">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-card border p-4 rounded-lg">
              <Star className="mx-auto h-6 w-6 text-yellow-500" />
              <p className="text-lg font-semibold mt-1">{gameId.level}</p>
              <p className="text-sm text-muted-foreground">Level</p>
            </div>
            <div className="bg-card border p-4 rounded-lg">
              <ThumbsUp className="mx-auto h-6 w-6 text-blue-500" />
              <p className="text-lg font-semibold mt-1">{gameId.likes.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Likes</p>
            </div>
            <div className="bg-card border p-4 rounded-lg">
              <Crown className="mx-auto h-6 w-6 text-purple-500" />
              <p className="text-lg font-semibold mt-1">{gameId.elitePasses}</p>
              <p className="text-sm text-muted-foreground">Elite Passes</p>
            </div>
            <div className="bg-card border p-4 rounded-lg">
              <Gamepad2 className="mx-auto h-6 w-6 text-green-500" />
              <p className="text-lg font-semibold mt-1">Full Access</p>
              <p className="text-sm text-muted-foreground">Ownership</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center gap-2">
                <CheckCircle className="text-accent" /> Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {gameId.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/50 bg-accent/5">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">Contact Seller Directly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">To purchase this account, please contact the seller using the links below. All deals are made privately.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href={`https://wa.me/${siteConfig.seller.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2" /> WhatsApp
                  </a>
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90" asChild>
                  <a href={`https://instagram.com/${siteConfig.seller.instagram}`} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="mr-2" /> Instagram
                  </a>
                </Button>
              </div>
              <div className="mt-4 p-3 bg-yellow-100/50 border border-yellow-300/50 text-yellow-700 rounded-lg text-xs flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Remember to check all details with the seller before making any payment. FFID VERCEL is not responsible for private transactions.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
