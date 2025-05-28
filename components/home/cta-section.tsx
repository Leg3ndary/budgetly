"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { FileText, ChevronRight } from "lucide-react";

const CTASection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-20 left-[5%] w-56 h-56 bg-chart-1/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="absolute top-40 left-[15%] w-64 h-64 bg-chart-2/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
            />

            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.Div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Take Control of Your Finances?
                        </h2>
                    </motion.Div>

                    <motion.P
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Join thousands of users who are managing their budgets smarter and saving more. Start your free trial today.
                    </motion.P>

                    <motion.Div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="/login">
                            <Button size="lg" className="gap-2">
                                Get Started for Free
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2"
                            >
                                <FileText className="h-4 w-4" />
                                View Pricing
                            </Button>
                        </Link>
                    </motion.Div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
