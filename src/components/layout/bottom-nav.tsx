'use client';

import Link from 'next/link';
import { Home, MessageCircle, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { SUPPORT_PHONE } from '@/lib/data';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Home',
      icon: Home,
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'Sell',
      icon: MessageCircle,
      href: `https://wa.me/${SUPPORT_PHONE.replace('+', '')}?text=${encodeURIComponent('Hi, I want to sell my game ID on FFID VERCEL.')}`,
      external: true,
    },
    {
      label: 'Socials',
      icon: Users,
      href: '#follow-us', // We can trigger the Follow Us dialog or just scroll to footer if we add id
      onClick: (e: React.MouseEvent) => {
          if (pathname === '/') {
              e.preventDefault();
              const element = document.getElementById('follow-us-section');
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }
          }
      }
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t z-50 px-4 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isExternal = item.external;

          const content = (
            <div className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors",
              item.active ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}>
              <Icon className="h-6 w-6" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={item.onClick}
              className="flex flex-col items-center justify-center"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
