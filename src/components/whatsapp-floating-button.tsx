'use client';

import { MessageCircle } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/data';

export default function WhatsAppFloatingButton() {
  const whatsappLink = `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent('Hi, I need help with FFID VERCEL.')}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 md:bottom-8"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
