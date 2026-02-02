'use client';

import { MessageCircle } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/data';

export default function WhatsAppFloatingButton() {
  const whatsappLink = `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("Hi! I'm visiting FFID VERCEL and have a question.")}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 transition-transform active:scale-95 md:bottom-8 md:right-8"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}
