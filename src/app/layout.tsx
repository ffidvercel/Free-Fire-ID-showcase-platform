import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'FFID VERCEL - Buy and Sell Game IDs',
  description:
    'A marketplace to buy, sell, and trade Free Fire, PUBG, and other game IDs.',
  openGraph: {
    title: 'FFID VERCEL - Buy and Sell Game IDs',
    description: 'The best place to find, buy, and sell exclusive game accounts securely.',
    images: [
      {
        url: 'https://storage.googleapis.com/project-os-prod/images/b1b18128-55a0-47b2-9d33-ea84a0d9b4b0.png',
        width: 1200,
        height: 630,
        alt: 'FFID VERCEL Logo',
      },
    ],
    type: 'website',
    url: 'https://ffid-vercel.app', // Replace with your actual domain
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FFID VERCEL - Buy and Sell Game IDs',
    description: 'The best place to find, buy, and sell exclusive game accounts securely.',
    images: ['https://storage.googleapis.com/project-os-prod/images/b1b18128-55a0-47b2-9d33-ea84a0d9b4b0.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col',
          'dark'
        )}
      >
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
