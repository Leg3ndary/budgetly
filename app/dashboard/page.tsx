"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import CoverLetterList from "@/components/dashboard/cover-letter-list";
import StatsCards from "@/components/dashboard/stats-cards";
import RecentActivity from "@/components/dashboard/recent-activity";
import { PlusCircle } from "lucide-react";
import { motion } from "@/components/ui/motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const { status } = useSession();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/");
        }
    }, [status, router]);

    if (!mounted || status === "loading") return null;

    return (
        <div className="flex min-h-screen bg-muted/40">
            <DashboardSidebar />

            <div className="flex-1">
                <main className="p-6">
                    <motion.Div
                        className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <p className="text-muted-foreground mt-1">
                                Manage your cover letters and applications
                            </p>
                        </div>

                        <Link href="/cover-letter/new">
                            <Button className="gap-2">
                                <PlusCircle className="h-4 w-4" />
                                New Cover Letter
                            </Button>
                        </Link>
                    </motion.Div>

                    <motion.Div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Tabs defaultValue="letters" className="space-y-8">
                            <TabsList>
                                <TabsTrigger value="letters">
                                    Cover Letters
                                </TabsTrigger>
                                <TabsTrigger value="overview">
                                    Overview
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="letters" className="space-y-8">
                                <StatsCards />
                                <CoverLetterList status={status} />
                            </TabsContent>

                            <TabsContent value="overview" className="space-y-8">
                                <StatsCards />
                                <div className="grid gap-8 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Recent Activity
                                            </CardTitle>
                                            <CardDescription>
                                                Your recent cover letter
                                                activity
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <RecentActivity />
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Account Summary
                                            </CardTitle>
                                            <CardDescription>
                                                Your account and subscription
                                                details
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">
                                                    Current Plan
                                                </h3>
                                                <p className="font-medium">
                                                    Free Plan
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">
                                                    Cover Letters Created
                                                </h3>
                                                <p className="font-medium">
                                                    1 of 1
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">
                                                    Member Since
                                                </h3>
                                                <p className="font-medium">
                                                    March 15, 2025
                                                </p>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href="/pricing">
                                                <Button variant="outline">
                                                    Upgrade Plan
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </motion.Div>
                </main>
            </div>
        </div>
    );
}
