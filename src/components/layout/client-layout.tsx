"use client";

import React, { useState, useEffect } from "react";
import AgreementModal from "@/components/agreement-modal";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [agreed, setAgreed] = useState<boolean | null>(null);
    const pathname = usePathname();

    // Pages that don't require agreement (e.g., policy, license)
    const publicPages = ["/policy", "/LICENSE"];
    const isPublicPage = publicPages.includes(pathname);

    useEffect(() => {
        const agreement = localStorage.getItem("ffid-agreement");
        if (agreement === "true") {
            setAgreed(true);
        } else {
            setAgreed(false);
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem("ffid-agreement", "true");
        setAgreed(true);
    };

    const handleDisagree = () => {
        window.location.href = "https://www.google.com";
    };

    // While checking localStorage, don't show anything to avoid flash
    if (agreed === null && !isPublicPage) {
        return <div className="min-h-screen bg-background" />;
    }

    const showModal = !agreed && !isPublicPage;

    return (
        <>
            <div className={cn(
                "flex flex-col min-h-screen transition-all duration-700",
                showModal && "blur-xl scale-[0.98] pointer-events-none select-none h-screen overflow-hidden"
            )}>
                {children}
            </div>
            {showModal && (
                <AgreementModal
                    onAgree={handleAgree}
                    onDisagree={handleDisagree}
                />
            )}
        </>
    );
}
