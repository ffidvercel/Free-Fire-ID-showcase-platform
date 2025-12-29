import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                    <Skeleton className="aspect-video w-full rounded-lg" />

                    <Card className="mt-8">
                        <CardHeader>
                            <Skeleton className="h-8 w-48" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <header>
                        <div className="flex justify-between items-start">
                            <div className="space-y-2 w-full">
                                <Skeleton className="h-10 w-3/4" />
                                <Skeleton className="h-10 w-1/3" />
                            </div>
                            <Skeleton className="h-10 w-10 rounded-md" />
                        </div>
                    </header>

                    <div className="grid grid-cols-2 gap-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="h-24 w-full rounded-lg" />
                        ))}
                    </div>

                    <Card>
                        <CardHeader>
                            <Skeleton className="h-6 w-32" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Skeleton key={i} className="h-6 w-20 rounded-full" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Skeleton className="h-6 w-48" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Skeleton className="h-4 w-full" />
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Skeleton className="h-10 flex-1" />
                                <Skeleton className="h-10 flex-1" />
                            </div>
                            <Skeleton className="h-12 w-full rounded-lg mt-4" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
