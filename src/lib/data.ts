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
};

const gameIds: GameID[] = [
  {
    id: "ff-max-pro-01",
    title: "Cobra MP40 Beast",
    price: 250,
    level: 72,
    elitePasses: 15,
    likes: 12000,
    mainImage: "ff-1",
    gallery: ["ff-1-gallery-1", "ff-1-gallery-2", "ff-1-gallery-3"],
    description: "Maxed out account with the legendary Cobra MP40 and many rare bundles. Includes all elite passes since season 10. Perfect for a serious player looking to dominate.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["Cobra MP40", "Titan Scar", "All Elite Passes (10+)", "15+ Rare Bundles", "High Like Count"],
  },
  {
    id: "pubg-glacier-m4-02",
    title: "Glacier M416 King",
    price: 400,
    level: 78,
    elitePasses: 20,
    likes: 25000,
    mainImage: "pubg-1",
    gallery: ["pubg-1-gallery-1", "pubg-1-gallery-2", "pubg-1-gallery-3"],
    description: "The ultimate PUBG account featuring a level 7 (max) Glacier M416 skin. Comes with multiple mythic outfits and vehicle skins. A true collector's item.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["Glacier M416 (Max)", "Pharaoh X-Suit", "Godzilla AWM", "McLaren & Tesla Skins"],
  },
  {
    id: "ff-sakura-vet-03",
    title: "OG Sakura Veteran",
    price: 600,
    level: 68,
    elitePasses: 5,
    likes: 8500,
    mainImage: "ff-2",
    gallery: ["ff-2-gallery-1", "ff-2-gallery-2", "ff-2-gallery-3"],
    description: "Extremely rare original Sakura bundle account from Season 1. A piece of Free Fire history. Only for true collectors who appreciate the value of OG items.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["Season 1 Sakura Bundle", "Season 2 Hip Hop Bundle", "Blue Dino Bundle", "Angel Wings Backpack"],
  },
  {
    id: "pubg-conqueror-04",
    title: "Multi-Season Conqueror",
    price: 320,
    level: 75,
    elitePasses: 18,
    likes: 18000,
    mainImage: "pubg-2",
    gallery: ["pubg-2-gallery-1", "pubg-2-gallery-2", "pubg-2-gallery-3"],
    description: "This account has achieved Conqueror tier in 5 different seasons. Includes all conqueror frames and titles. Perfect for players who value rank and prestige.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["5x Conqueror Frames", "High KD Ratio", "Rare Emotes", "Full RP every season"],
  },
   {
    id: "ff-starter-pack-05",
    title: "Pro Starter Pack",
    price: 80,
    level: 60,
    elitePasses: 4,
    likes: 3000,
    mainImage: "ff-3",
    gallery: ["ff-3-gallery-1", "ff-3-gallery-2", "ff-3-gallery-3"],
    description: "A solid starter account with several good gun skins and character bundles. Great value for anyone starting out or needing a reliable secondary account.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["AK47 - Blue Flame Draco", "Chrono Character", "4+ Gun Evo Skins", "Good starting stats"],
  },
  {
    id: "pubg-mythic-hoard-06",
    title: "Mythic Fashion Hoard",
    price: 550,
    level: 80,
    elitePasses: 25,
    likes: 35000,
    mainImage: "pubg-3",
    gallery: ["pubg-3-gallery-1", "pubg-3-gallery-2", "pubg-3-gallery-3"],
    description: "An account for fashion lovers, with over 30 mythic outfits and countless legendary items. Has a massive inventory that will turn heads in every lobby.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["30+ Mythic Outfits", "The Fool - M416", "Blood Raven X-Suit", "Huge Inventory"],
  },
  {
    id: "ff-budget-beast-07",
    title: "Budget Beast",
    price: 50,
    level: 55,
    elitePasses: 2,
    likes: 1500,
    mainImage: "ff-4",
    gallery: ["ff-4-gallery-1", "ff-4-gallery-2", "ff-4-gallery-3"],
    description: "A cheap but powerful account. Has a few key gun skins and a solid character selection. Perfect for players on a budget who still want a competitive edge.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["Decent Gun Skins", "Alok & K Characters", "Great Value"],
  },
  {
    id: "pubg-vehicle-skin-08",
    title: "Vehicle Skin Garage",
    price: 150,
    level: 65,
    elitePasses: 10,
    likes: 9000,
    mainImage: "pubg-4",
    gallery: ["pubg-4-gallery-1", "pubg-4-gallery-2", "pubg-4-gallery-3"],
    description: "This account boasts a huge collection of rare vehicle skins, including the limited edition UAZ and Dacia skins. Drive in style and show off to your teammates.",
    contact: {
      whatsapp: "+1234567890",
      instagram: "ffidsellerpro"
    },
    features: ["Multiple McLaren Skins", "Aegis UAZ (Lvl 7)", "Rare Motorcycle Skins", "Full Garage"],
  },
];

export function getGameIds() {
  return gameIds;
}

export function getGameId(id: string) {
  return gameIds.find((gameId) => gameId.id === id);
}
