'use client';

import { MessageCircle } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/data';

export default function WhatsAppFloatingButton() {
  const message = "Hi! I'm interested in buying or selling a game ID on FFID VERCEL.";
  const whatsappLink = `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 md:bottom-6 md:right-6"
      aria-label="Contact support on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
