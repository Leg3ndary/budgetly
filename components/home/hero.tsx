"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";
import { FileText, ChevronRight } from "lucide-react";

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative py-20 overflow-hidden min-h-screen">
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-20 left-[5%] w-56 h-56 bg-red-300/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="absolute top-40 left-[15%] w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
            />
            <div
                className="absolute top-[28rem] left-[75%] w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "3s" }}
            />
            <div
                className="absolute top-[30rem] left-[45%] w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "4s" }}
            />

            <div className="container relative z-10 mx-auto px-4 flex flex-col">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <motion.Div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-4">
                            <span className="text-sm font-medium text-primary">
                                Smart Budget Management in Seconds
                            </span>
                        </div>
                    </motion.Div>

                    <motion.H1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Take Control of Your{" "}
                        <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                            Finances
                        </span>{" "}
                        with AI{" "}
                        <span className="text-primary">Budget Management</span>
                    </motion.H1>

                    <motion.P
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Create{" "}
                        <span className="bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
                            smart
                        </span>
                        ,{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                            personalized
                        </span>
                        ,{" "}
                        <span className="bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent">
                            effective
                        </span>{" "}
                        budgets in seconds.
                    </motion.P>

                    <motion.Div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/login">
                            <Button size="lg" className="gap-2 !px-6">
                                Get Started
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/templates">
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 !px-6"
                            >
                                <FileText className="h-4 w-4" />
                                View Templates
                            </Button>
                        </Link>
                    </motion.Div>
                </div>

                <motion.Div
                    className="relative max-w-5xl mx-auto mt-8 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="aspect-video bg-card rounded-xl border shadow-2xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-muted/50 to-background p-4 flex flex-col">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                <div className="h-6 w-96 rounded-md bg-muted/50 ml-4"></div>
                            </div>

                            <div className="flex flex-1 gap-6 pb-4">
                                <div className="w-1/3">
                                    <div className="h-10 w-full rounded-md bg-muted/50 mb-4"></div>
                                    <div className="h-24 w-full rounded-md bg-muted/30 mb-4"></div>
                                    <div className="h-10 w-full rounded-md bg-muted/50 mb-4"></div>
                                    <div className="h-24 w-full rounded-md bg-muted/30 mb-4"></div>
                                    <div className="h-10 w-full rounded-md bg-muted/50 mb-4"></div>
                                </div>

                                <div className="w-2/3">
                                    <div className="h-10 w-full rounded-md bg-muted/50 mb-6"></div>
                                    <div className="h-6 w-3/4 rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-full rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-5/6 rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-full rounded-md bg-muted/30 mb-6"></div>

                                    <div className="h-6 w-5/6 rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-full rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-4/5 rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-full rounded-md bg-muted/30 mb-3"></div>
                                    <div className="h-6 w-full rounded-md bg-muted/30 mb-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-8 left-0 right-0 h-full bg-gradient-to-b from-white/5 to-transparent transform -skew-y-6 pointer-events-none"></div>
                </motion.Div>
            </div>
        </section>
    );
};

export default Hero;
