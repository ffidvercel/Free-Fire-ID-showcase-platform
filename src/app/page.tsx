
"use client";

import React, { useState, useEffect } from "react";
import AgreementModal from "@/components/agreement-modal";
import { getGameIds, GameID } from "@/lib/data";
import IdCard from "@/components/id-card";

export default function Home() {
  const [agreed, setAgreed] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [gameIds, setGameIds] = useState<GameID[]>([]);

  useEffect(() => {
    const agreement = localStorage.getItem("ffid-agreement");
    if (agreement === "true") {
      setAgreed(true);
      setShowPage(true);
    } else {
      // If no agreement is found, we still want to show the modal
      // but not the page content. We can ensure agreed is false.
      setAgreed(false);
    }
    setGameIds(getGameIds());
  }, []);

  const handleAgree = () => {
    localStorage.setItem("ffid-agreement", "true");
    setAgreed(true);
    setShowPage(true);
  };

  const handleDisagree = () => {
    // You can redirect or show a different message if the user disagrees
    window.location.href = "https://www.google.com";
  };

  if (!agreed) {
    return (
      <AgreementModal
        onAgree={handleAgree}
        onDisagree={handleDisagree}
      />
    );
  }

  if (!showPage) {
    // This state helps prevent a flash of content before the effect runs
    return null; // Or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tighter">
          Find Your Perfect Game ID
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Browse our curated selection of high-quality game accounts. All transactions are handled directly and privately.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gameIds.map((id) => (
          <IdCard key={id.id} gameId={id} />
        ))}
      </div>
    </div>
  );
}
