'use client';

import { MessageSquare } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/data';

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("Hi, I'm interested in buying/selling a game ID.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 md:bottom-8 md:right-8"
      aria-label="Contact Support on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
}
