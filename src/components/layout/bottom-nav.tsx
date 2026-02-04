'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shield, PlusCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SUPPORT_PHONE } from '@/lib/data';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Policy', href: '/policy', icon: Shield },
    {
        label: 'Sell',
        href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("I want to sell my ID on FFID VERCEL")}`,
        icon: PlusCircle,
        external: true
    },
    {
        label: 'Contact',
        href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("Hi, I need help with FFID VERCEL")}`,
        icon: MessageCircle,
        external: true
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t z-50 px-4 h-16 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
