
'use client';

import Link from 'next/link';
import { Gamepad2, Menu, X, FileText, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
} from '@/components/ui/sheet';
import { Separator } from '../ui/separator';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: Gamepad2 },
    { href: '/policy', label: 'Our Policy', icon: Shield },
    { href: '/LICENSE', label: 'License', icon: FileText },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Gamepad2 className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold font-headline text-primary tracking-tighter">
              FFID VERCEL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.slice(1).map((link) => (
               <Button variant="ghost" asChild key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
            ))}
          </nav>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
          <SheetHeader className="p-4 border-b">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Gamepad2 className="h-7 w-7 text-accent" />
                    <span className="text-xl font-bold font-headline text-primary tracking-tighter">
                    FFID VERCEL
                    </span>
                </Link>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>
          <div className="p-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                    <SheetClose asChild>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 py-3 text-lg font-medium"
                    >
                      <link.icon className="h-5 w-5 text-accent"/>
                      {link.label}
                    </Link>
                  </SheetClose>
                  {index < navLinks.length - 1 && <Separator />}
                </div>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
