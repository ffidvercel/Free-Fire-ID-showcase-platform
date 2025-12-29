
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info, ShieldCheck, AlertTriangle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/policy" className="underline hover:text-accent transition-colors">Policy</Link>
          <Link href="/LICENSE" className="underline hover:text-accent transition-colors">License</Link>
          <Dialog>
            <DialogTrigger asChild>
              <button className="underline hover:text-accent transition-colors flex items-center gap-1">
                <Info className="h-3.5 w-3.5" />
                Show More Details
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                  <ShieldCheck className="text-accent" />
                  About FFID VERCEL
                </DialogTitle>
                <DialogDescription className="pt-2 text-base">
                  Important information about our platform and your safety.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4 text-sm">
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-primary flex items-center gap-2 mb-1">
                    <Info className="h-4 w-4" /> Our Purpose
                  </h4>
                  <p>FFID VERCEL is a listing directory designed for entertainment and fun. We provide a platform for users to showcase their game accounts and connect with others.</p>
                </div>

                <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-600 dark:text-yellow-500 flex items-center gap-2 mb-1">
                    <AlertTriangle className="h-4 w-4" /> Safety First
                  </h4>
                  <p>We do not facilitate payments or account transfers. All transactions are private deals between users. Always verify details before proceeding with any transaction.</p>
                </div>

                <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <h4 className="font-semibold text-green-600 dark:text-green-500 flex items-center gap-2 mb-1">
                    <ShieldCheck className="h-4 w-4" /> No Affiliation
                  </h4>
                  <p>This project is independent and not affiliated with Garena, Krafton, or any other game developer. All trademarks belong to their respective owners.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p>&copy; {new Date().getFullYear()} FFID VERCEL. All Rights Reserved.</p>
        <p className="mt-2 text-xs opacity-70">
          This platform is an independent project and is not affiliated with Garena, Krafton, or any other game developer.
        </p>
      </div>
    </footer>
  );
}

