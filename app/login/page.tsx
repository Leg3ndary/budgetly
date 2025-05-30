"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui";
import { FileText, Github } from "lucide-react";
import { motion } from "@/components/ui/motion";

export default function LoginPage() {
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        setMounted(true);
        if (session) {
            router.push("/dashboard");
        }
    }, [session, router]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
            {/* Gradient background */}
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-20 left-[5%] w-56 h-56 bg-chart-1/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />

            <motion.Div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="border shadow-lg">
                    <CardHeader className="space-y-1 text-center">
                        <div className="flex justify-center mb-2">
                            <FileText className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold">
                            Welcome back
                        </CardTitle>
                        <CardDescription>
                            Sign in with your preferred method
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button
                            variant="outline"
                            className="w-full gap-2"
                            onClick={() =>
                                signIn("github", { callbackUrl: "/dashboard" })
                            }
                            disabled={isLoading}
                        >
                            <Github className="h-4 w-4" />
                            Continue with GitHub
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full gap-2"
                            onClick={() =>
                                signIn("google", { callbackUrl: "/dashboard" })
                            }
                            disabled={isLoading}
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </Button>
                    </CardContent>
                </Card>
            </motion.Div>
        </div>
    );
}
