import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <Skeleton className="h-12 w-3/4 max-w-xl mx-auto mb-4" />
                <Skeleton className="h-6 w-1/2 max-w-lg mx-auto" />
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden h-full">
                        <Skeleton className="aspect-[4/3] w-full" />
                        <div className="p-4 space-y-3">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-8 w-1/2" />
                            <div className="space-y-2 pt-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                            <Skeleton className="h-10 w-full mt-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
