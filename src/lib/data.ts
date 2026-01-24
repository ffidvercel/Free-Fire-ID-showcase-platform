
export type GameID = {
  id: string;
  title: string;
  price: number;
  level: number;
  elitePasses: number;
  likes: number;
  mainImage: string;
  gallery: string[];
  description: string;
  contact: {
    whatsapp: string;
    instagram: string;
  };
  features: string[];
  isVerified?: boolean;
  hasInstantTransfer?: boolean;
  isPrivateAndSecure?: boolean;
  video?: string;
};

const gameIds: GameID[] = [
  {
    id: "old-id-rare-collection-01",
    title: "OLD ID - Rare Collection",
    price: 5000,
    level: 64,
    elitePasses: 10,
    likes: 6000,
    mainImage: "id1-main",
    gallery: ["id1-1", "id1-2", "id1-3", "id1-4"],
    description: "An OLD ID with a RARE COLLECTION of gun skins. Features the iconic Red Poker and many Evolution skins. A must-have for collectors who appreciate OG items and rare aesthetics.",
    contact: {
      whatsapp: "+919999999999",
      instagram: "ffidvercel"
    },
    features: ["Red Poker", "Many Evo Skins", "Rare Gun Skins", "6000+ Likes", "OLD ID"],
    isVerified: true,
    hasInstantTransfer: true,
    isPrivateAndSecure: true,
    video: "https://www.youtube.com/watch?v=d-ezNsni31w",
  },
  {
    id: "old-id-rare-collection-02",
    title: "OLD ID - Evo Master",
    price: 5000,
    level: 63,
    elitePasses: 8,
    likes: 5000,
    mainImage: "id2-main",
    gallery: ["id2-1", "id2-2", "id2-3", "id2-4", "id2-5", "id2-6", "id2-7", "id2-8", "id2-9", "id2-10", "id2-11", "id2-12", "id2-13", "id2-14", "id2-15", "id2-16"],
    description: "Another OLD ID with a RARE COLLECTION. This account boasts 3/3+ Evolution skins and rare gun skins. Perfect for players who want a head start with premium items.",
    contact: {
      whatsapp: "+919999999999",
      instagram: "ffidvercel"
    },
    features: ["3/3+ Evo Skins", "Rare Gun Skins", "Rare Collection", "5000+ Likes", "OLD ID"],
    isVerified: true,
    isPrivateAndSecure: true,
  },
  {
    id: "awm-lovers-paradise-03",
    title: "AWM Lover's Paradise",
    price: 2500,
    level: 66,
    elitePasses: 12,
    likes: 9500,
    mainImage: "id3-main",
    gallery: ["id3-1", "id3-2", "id3-3", "id3-4", "id3-5", "id3-6", "id3-7", "id3-8", "id3-9", "id3-10", "id3-11", "id3-12", "id3-13", "id3-14", "id3-15", "id3-16", "id3-17", "id3-18"],
    description: "For AWM lovers! This account features the rare AWM Gamer's Skin, all incubator items including top incubator, the legendary Fist skin, and the Street Fighter Bundle. An absolute steal at this price.",
    contact: {
      whatsapp: "+919999999999",
      instagram: "ffidvercel"
    },
    features: ["AWM Rare Gamer's Skin", "All Incubator Items", "Top Incubator", "Fist Skin", "Street Fighter Bundle", "9500+ Likes"],
    isVerified: true,
    hasInstantTransfer: true,
    isPrivateAndSecure: true,
    video: "https://www.youtube.com/watch?v=i1GFdyH6Iu4",
  },
];

export function getGameIds() {
  return gameIds;
}

export function getGameId(id: string) {
  return gameIds.find((gameId) => gameId.id === id);
}
