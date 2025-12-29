
"use client";

import React, { useState, useEffect } from "react";
import AgreementModal from "@/components/agreement-modal";

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const [agreed, setAgreed] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const agreement = localStorage.getItem("ffid-agreement");
    if (agreement === "true") {
      setAgreed(true);
      setShowPage(true);
    } else {
      setAgreed(false);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("ffid-agreement", "true");
    setAgreed(true);
    setShowPage(true);
  };

  const handleDisagree = () => {
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
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}
