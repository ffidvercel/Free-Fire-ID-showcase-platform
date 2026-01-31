'use client';

import Link from 'next/link';
import { Gamepad2, PlusCircle, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { SUPPORT_PHONE } from '@/lib/data';

export default function BottomNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Gamepad2 },
    { href: `https://wa.me/${SUPPORT_PHONE}?text=${encodeURIComponent('I want to sell my game ID')}`, label: 'Sell', icon: PlusCircle, external: true },
    { href: '/policy', label: 'Policy', icon: Shield },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t z-50 px-4">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          if (link.external) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon className={cn("h-6 w-6", link.label === 'Sell' && "text-accent")} />
                <span className="text-[10px] mt-1 font-medium">{link.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors",
                isActive ? "text-accent" : "text-muted-foreground hover:text-accent"
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[10px] mt-1 font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
