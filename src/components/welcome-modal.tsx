"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenWelcomeModal', 'true');
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to FFID Store!</DialogTitle>
          <DialogDescription>
            Your one-stop shop for exclusive game IDs. All transactions are handled securely via WhatsApp for your convenience.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Browse our collection and find your perfect account. Click "Buy Now" to connect with us directly.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full">
          Start Browsing
        </Button>
      </DialogContent>
    </Dialog>
  );
}
