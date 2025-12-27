import { Shield, Users, Mic, Info, FileText } from 'lucide-react';

export default function PolicyPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <FileText className="mx-auto h-12 w-12 text-accent mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tighter">
            Our Platform Policy
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Understanding how FFID VERCEL works is important. Here are our core principles and disclaimers.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 border rounded-lg bg-background">
            <h2 className="font-headline text-2xl font-semibold flex items-center gap-3 text-primary">
              <Mic className="h-6 w-6 text-accent" />A Platform for Fun
            </h2>
            <p className="mt-3 text-muted-foreground">
              FFID VERCEL was created with the primary intention of being an entertaining and fun platform. We are a community of gamers showcasing interesting game accounts.
            </p>
            <p className="mt-2 text-muted-foreground">
              In line with this, any direct communication you might receive originating from a contact made via our website, such as a phone call, may also be for fun and entertainment purposes. We encourage all users to interact with a lighthearted and friendly spirit.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-background">
            <h2 className="font-headline text-2xl font-semibold flex items-center gap-3 text-primary">
              <Users className="h-6 w-6 text-accent" />
              Direct & Private Transactions
            </h2>
            <p className="mt-3 text-muted-foreground">
              FFID VERCEL is a listing or advertising website, not a marketplace or escrow service.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>We <span className="font-semibold text-foreground">do not</span> process payments.</li>
              <li>We <span className="font-semibold text-foreground">do not</span> handle account transfers or credential exchanges.</li>
              <li>We <span className="font-semibold text-foreground">do not</span> mediate disputes between buyers and sellers.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              All transactions are conducted privately between the buyer and the seller after initial contact is made. The website's role ends once you use the provided contact information.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-background">
            <h2 className="font-headline text-2xl font-semibold flex items-center gap-3 text-primary">
              <Shield className="h-6 w-6 text-accent" />
              Legal Disclaimer
            </h2>
            <p className="mt-3 text-muted-foreground">
              Your safety and legal awareness are crucial. Please read the following carefully:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">No Affiliation:</span> FFID VERCEL is an independent entity and is not affiliated with, endorsed by, or connected to Garena, Krafton, or any game developer.</li>
              <li><span className="font-semibold text-foreground">Terms of Service:</span> The buying, selling, or trading of game accounts may violate the Terms of Service (ToS) of the respective games. This can result in penalties, including permanent account suspension.</li>
              <li><span className="font-semibold text-foreground">User Responsibility:</span> Users are solely responsible for their actions and for ensuring they comply with the policies of the game companies. You use this platform at your own risk.</li>
            </ul>
          </div>
          
           <div className="p-6 border rounded-lg bg-background">
            <h2 className="font-headline text-2xl font-semibold flex items-center gap-3 text-primary">
              <Info className="h-6 w-6 text-accent" />
              In Summary
            </h2>
            <p className="mt-3 text-muted-foreground">
             Think of us like a classifieds board for game accounts. We provide the space to advertise, but the deal is yours to make. Be smart, be safe, and have fun!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
