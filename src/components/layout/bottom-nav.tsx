'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PlusCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SUPPORT_PHONE } from '@/lib/data';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Home',
      icon: Home,
      href: '/'
    },
    {
      label: 'Sell ID',
      icon: PlusCircle,
      href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("Hi, I want to sell my game ID. Please guide me.")}`
    },
    {
      label: 'Support',
      icon: MessageCircle,
      href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("Hi, I need support regarding FFID VERCEL.")}`
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/10 px-4 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          const isExternal = item.href.startsWith('http');

          const content = (
            <div className={cn(
              "flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-300",
              isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-primary"
            )}>
              <Icon className={cn("h-6 w-6", isActive && "fill-primary/10")} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-full"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex-1 h-full"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
