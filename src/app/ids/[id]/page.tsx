import { getGameId, getGameIds } from "@/lib/data";
import { notFound } from 'next/navigation';
import IdDetailClient from "./id-detail-client";
import type { Metadata, ResolvingMetadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const gameId = getGameId(id);

  if (!gameId) {
    return {
      title: 'ID Not Found',
    };
  }

  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);

  // The `images` array in openGraph should be the specific image for this ID.
  // We can also include parent images, but the most specific one should be first.
  const ogImages = mainImage ? [{
    url: mainImage.imageUrl,
    width: 1200,
    height: 630,
    alt: gameId.title,
  }] : [];

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

export default async function IdDetailPage({ params }: Props) {
  const { id } = await params;
  const gameId = getGameId(id);

  if (!gameId) {
    notFound();
  }

  const mainImage = PlaceHolderImages.find(img => img.id === gameId.mainImage);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: gameId.title,
    image: mainImage ? mainImage.imageUrl : undefined,
    description: gameId.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: gameId.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IdDetailClient gameId={gameId} />
    </>
  );
}
