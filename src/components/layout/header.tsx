
'use client';

import Link from 'next/link';
import { Gamepad2, Menu, X } from 'lucide-react';
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
            <Button variant="ghost" asChild>
              <Link href="/policy">Our Policy</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/LICENSE">License</Link>
            </Button>
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
          <SheetHeader className="p-4 border-b text-left">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold font-headline text-primary tracking-tighter">
                Menu
              </span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>
          <div className="p-4">
            <nav className="flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="/" className="py-2 text-lg font-medium">
                  Home
                </Link>
              </SheetClose>
              <Separator />
              <SheetClose asChild>
                <Link href="/policy" className="py-2 text-lg font-medium">
                  Our Policy
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/LICENSE" className="py-2 text-lg font-medium">
                  License
                </Link>
              </SheetClose>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
