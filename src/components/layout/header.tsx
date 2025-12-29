'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, FileText, Shield, Gamepad2, Users, Youtube, Facebook } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
} from '@/components/ui/sheet';
import { Separator } from '../ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DiscordIcon, InstagramIcon } from '@/components/social-icons';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: Gamepad2 },
    { href: '/policy', label: 'Our Policy', icon: Shield },
    { href: '/LICENSE', label: 'License', icon: FileText },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/ffidvercel/', icon: InstagramIcon, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: 'Discord', url: 'https://discord.gg/3XaZYzr3', icon: DiscordIcon, color: "bg-[#5865F2]" },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585687532032&sk=about', icon: Facebook, color: "bg-[#1877F2]" },
    { name: 'YouTube', url: 'https://www.youtube.com/@FFID-Vercel', icon: Youtube, color: "bg-[#FF0000]" }
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
             <Image src="https://storage.googleapis.com/project-os-prod/images/b1b18128-55a0-47b2-9d33-ea84a0d9b4b0.png" alt="FFID VERCEL Logo" width={140} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.slice(1).map((link) => (
               <Button variant="ghost" asChild key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
            ))}
             <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <Users className="mr-2 h-4 w-4" />
                  Follow Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                    <Users className="text-accent" />
                    Follow Our Socials
                  </DialogTitle>
                  <DialogDescription>
                    Stay updated with the latest accounts, news, and community events.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-3 pt-4">
                  {socialLinks.map(social => (
                     <Button key={social.name} className={`justify-start text-white hover:opacity-90 ${social.color}`} asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <social.icon className="mr-3 h-5 w-5" />
                          <span>Follow us on {social.name}</span>
                        </a>
                    </Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
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
                    <Image src="https://storage.googleapis.com/project-os-prod/images/b1b18128-55a0-47b2-9d33-ea84a0d9b4b0.png" alt="FFID VERCEL Logo" width={140} height={40} className="h-10 w-auto" />
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
               <div key="follow-us">
                    <Dialog>
                        <DialogTrigger asChild>
                             <button
                                className="flex items-center gap-3 py-3 text-lg font-medium w-full"
                              >
                                <Users className="h-5 w-5 text-accent"/>
                                Follow Us
                              </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                            <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                                <Users className="text-accent" />
                                Follow Our Socials
                            </DialogTitle>
                            <DialogDescription>
                                Stay updated with the latest accounts, news, and community events.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col space-y-3 pt-4">
                            {socialLinks.map(social => (
                                <Button key={social.name} className={`justify-start text-white hover:opacity-90 ${social.color}`} asChild>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <social.icon className="mr-3 h-5 w-5" />
                                    <span>Follow us on {social.name}</span>
                                    </a>
                                </Button>
                            ))}
                            </div>
                        </DialogContent>
                    </Dialog>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
