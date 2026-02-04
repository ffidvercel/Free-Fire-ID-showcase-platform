import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ClientLayout from '@/components/layout/client-layout';
import BottomNav from '@/components/layout/bottom-nav';
import WhatsAppFloatingButton from '@/components/layout/whatsapp-floating-button';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'FFID VERCEL - Buy and Sell Game IDs',
    template: '%s | FFID VERCEL',
  },
  description:
    'The best marketplace to buy, sell, and trade Free Fire, PUBG, and other exclusive game IDs securely.',
  keywords: ['Free Fire IDs', 'PUBG IDs', 'Game Accounts', 'Buy Game IDs', 'Sell Game IDs', 'FFID VERCEL'],
  authors: [{ name: 'FFID VERCEL Team' }],
  creator: 'FFID VERCEL',
  publisher: 'FFID VERCEL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://freefireid.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FFID VERCEL - Buy and Sell Game IDs',
    description: 'The best place to find, buy, and sell exclusive game accounts securely.',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'FFID VERCEL Logo',
      },
    ],
    type: 'website',
    url: 'https://freefireid.vercel.app',
    siteName: 'FFID VERCEL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FFID VERCEL - Buy and Sell Game IDs',
    description: 'The best place to find, buy, and sell exclusive game accounts securely.',
    images: ['/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col',
          inter.variable,
          spaceGrotesk.variable,
          'dark'
        )}
      >
        <ClientLayout>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pb-16 md:pb-0">{children}</main>
            <Footer />
            <BottomNav />
            <WhatsAppFloatingButton />
          </div>
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
