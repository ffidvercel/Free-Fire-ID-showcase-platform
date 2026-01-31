'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { SUPPORT_PHONE } from '@/lib/data';

export default function WhatsAppFloatingButton() {
  const whatsappNumber = SUPPORT_PHONE;
  const message = "Hello, I have a question about FFID VERCEL.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-40">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-8 w-8 fill-white/20" />
          <span className="sr-only">Contact on WhatsApp</span>
        </a>
      </Button>
    </div>
  );
}
