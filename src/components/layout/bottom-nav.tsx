'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shield, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SUPPORT_PHONE } from '@/lib/data';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Policy', icon: Shield, href: '/policy' },
    {
      label: 'Sell',
      icon: PlusCircle,
      href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent('Hi, I want to sell my game ID.')}`,
      isExternal: true
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          const content = (
            <div className={cn(
              "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}>
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </div>
          );

          if (item.isExternal) {
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
            <Link key={item.label} href={item.href} className="flex-1 h-full">
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
