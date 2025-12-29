import { getGameId } from "@/lib/data";
import { notFound } from 'next/navigation';
import IdDetailClient from "./id-detail-client";

type Props = {
  params: { id: string };
};

export default function IdDetailPage({ params }: Props) {
  const gameId = getGameId(params.id);

  if (!gameId) {
    notFound();
  }

  return <IdDetailClient gameId={gameId} />;
}
