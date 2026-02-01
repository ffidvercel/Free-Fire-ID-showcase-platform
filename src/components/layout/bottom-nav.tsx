'use client';

import Link from 'next/link';
import { Home as HomeIcon, MessageCircle, Users, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { SUPPORT_PHONE } from '@/lib/data';

const navItems = [
  { label: 'Home', href: '/', icon: HomeIcon },
  { label: 'Sell', href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent("I want to sell my game ID.")}`, icon: MessageCircle, external: true },
  { label: 'Policy', href: '/policy', icon: Shield },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-50 px-6 py-3 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
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
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
            >
              <Icon className="h-6 w-6" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors",
              isActive ? "text-accent" : "text-muted-foreground hover:text-accent"
            )}
          >
            <Icon className="h-6 w-6" />
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
