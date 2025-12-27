import { Copyright, Ban, Shield } from 'lucide-react';

export default function LicensePage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <Copyright className="mx-auto h-12 w-12 text-accent mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tighter">
            Legal &amp; License
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            This is a legally binding agreement governing the use of this website.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="p-6 border rounded-lg bg-background">
            <h2 className="font-headline text-2xl font-semibold flex items-center gap-3 text-primary">
              <Shield className="h-6 w-6 text-accent" />
              Full Copyright and Ownership
            </h2>
            <p className="mt-3 text-muted-foreground">
              Copyright &copy; {new Date().getFullYear()}, FFID VERCEL. All rights reserved.
            </p>
            <p className="mt-2 text-muted-foreground">
              This website and all its content, including but not limited to text, graphics, logos, images, and the underlying software, are the sole and exclusive property of FFID VERCEL.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-background">
            <h2 className="font-headline text-2xl font-semibold flex items-center gap-3 text-destructive">
              <Ban className="h-6 w-6" />
              Strict Prohibition of Use
            </h2>
            <p className="mt-3 text-muted-foreground">
              No part of this website may be used, reproduced, copied, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any purpose whatsoever without the prior written consent of FFID VERCEL.
            </p>
             <p className="mt-2 text-muted-foreground">
              This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Commercial and non-commercial use.</li>
                <li>Creating derivative works.</li>
                <li>Scraping, data mining, or extracting any content.</li>
                <li>Using the website's code, design, or structure for another project.</li>
            </ul>
            <p className="mt-4 font-semibold text-foreground">
              Any unauthorized use is a violation of copyright law and will be prosecuted to the fullest extent of the law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
