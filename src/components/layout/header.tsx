'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, FileText, Shield, Gamepad2, Users, Youtube, Facebook, MessageCircle } from 'lucide-react';
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
    { name: 'WhatsApp', url: 'https://wa.me/919999999999', icon: MessageCircle, color: "bg-[#25D366]" },
    { name: 'Instagram', url: 'https://www.instagram.com/ffidvercel/', icon: InstagramIcon, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: 'Discord', url: 'https://discord.gg/3XaZYzr3', icon: DiscordIcon, color: "bg-[#5865F2]" },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585687532032&sk=about', icon: Facebook, color: "bg-[#1877F2]" },
  ];

  const youtubeLinks = [
    { name: 'FFID-Vercel', url: 'https://www.youtube.com/@FFID-Vercel' },
    { name: 'FFIDVercel', url: 'https://www.youtube.com/@FFIDVercel' },
  ]

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="FFID VERCEL Logo" width={48} height={48} className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.slice(1).map((link) => (
              <Button variant="ghost" asChild key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button variant="ghost" asChild>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="outline" size="sm" asChild className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </Button>
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
                <Image src="/logo.png" alt="FFID VERCEL Logo" width={48} height={48} className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" />
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
                      <link.icon className="h-5 w-5 text-accent" />
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
                      <Users className="h-5 w-5 text-accent" />
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="justify-start text-white hover:opacity-90 bg-[#FF0000]">
                            <Youtube className="mr-3 h-5 w-5" />
                            <span>Follow us on YouTube</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm">
                          <DialogHeader>
                            <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                              <Youtube className="text-accent" />
                              Our YouTube Channels
                            </DialogTitle>
                            <DialogDescription>
                              We have two channels! Check them both out.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex flex-col space-y-3 pt-4">
                            {youtubeLinks.map(yt => (
                              <Button key={yt.name} className="justify-start text-white hover:opacity-90 bg-[#FF0000]" asChild>
                                <a href={yt.url} target="_blank" rel="noopener noreferrer">
                                  <Youtube className="mr-3 h-5 w-5" />
                                  <span>{yt.name}</span>
                                </a>
                              </Button>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
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
