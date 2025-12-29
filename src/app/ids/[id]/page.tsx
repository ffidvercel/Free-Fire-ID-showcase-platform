import { getGameId, getGameIds } from "@/lib/data";
import { notFound } from 'next/navigation';
import IdDetailClient from "./id-detail-client";
import type { Metadata, ResolvingMetadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const gameId = getGameId(id);

  if (!gameId) {
    return {
      title: 'ID Not Found',
    };
  }
  
  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);

  // The `images` array in openGraph should be the specific image for this ID.
  // We can also include parent images, but the most specific one should be first.
  const ogImages = mainImage ? [mainImage.imageUrl] : [];

  return {
    title: `${gameId.title} | FFID VERCEL`,
    description: gameId.description,
    openGraph: {
      title: `${gameId.title} | FFID VERCEL`,
      description: gameId.description,
      images: ogImages,
    },
    twitter: {
        card: 'summary_large_image',
        title: `${gameId.title} | FFID VERCEL`,
        description: gameId.description,
        images: ogImages,
    }
  };
}

export async function generateStaticParams() {
  const gameIds = getGameIds();
 
  return gameIds.map((id) => ({
    id: id.id,
  }))
}

export default function IdDetailPage({ params }: Props) {
  const gameId = getGameId(params.id);

  if (!gameId) {
    notFound();
  }

  return <IdDetailClient gameId={gameId} />;
}
