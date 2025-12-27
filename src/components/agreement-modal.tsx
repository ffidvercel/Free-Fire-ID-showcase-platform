"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Info } from "lucide-react";

interface AgreementModalProps {
  onAgree: () => void;
  onDisagree: () => void;
}

export default function AgreementModal({ onAgree, onDisagree }: AgreementModalProps) {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-headline text-2xl flex items-center gap-2">
            <Info className="text-accent" />
            Welcome to FFID Hub!
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-2 text-base">
            This website is primarily for entertainment and fun. Before you continue, please read and agree to our terms.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="py-4 text-sm">
          <p className="font-semibold text-primary">Please be aware:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
            <li>This platform is for fun.</li>
            <li>Calls received may also be for fun.</li>
            <li>Transactions happen privately and at your own risk.</li>
          </ul>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm font-semibold hover:no-underline">
              Show More Details & Disclaimers
            </AccordionTrigger>
            <AccordionContent className="text-xs space-y-3 text-muted-foreground">
               <div className="flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                <p><span className="font-semibold text-foreground">It is fully safe:</span> We act as a listing directory. We do not handle payments or account transfers on this website.</p>
               </div>
               <p><span className="font-semibold text-foreground">No Affiliation:</span> We are not affiliated with, endorsed by, or in any way officially connected with Garena, Krafton, or any of their subsidiaries or affiliates.</p>
               <p><span className="font-semibold text-foreground">Terms of Service:</span> Account trading may violate the terms of service of the respective games. Users are responsible for their own actions and compliance.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel onClick={onDisagree} className="w-full sm:w-auto">Disagree</AlertDialogCancel>
          <AlertDialogAction onClick={onAgree} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">I Agree</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
