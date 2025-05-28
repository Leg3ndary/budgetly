"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import { FileText, Edit, Download, ArrowRight, Sparkles, CreditCard, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <FileText className="h-6 w-6" />,
        title: "Create Your Budget",
        description: "Set up your first budget with our easy-to-use interface",
    },
    {
        number: "02",
        icon: <CreditCard className="h-6 w-6" />,
        title: "Track Expenses",
        description: "Connect your accounts or manually enter your transactions",
    },
    {
        number: "03",
        icon: <Sparkles className="h-6 w-6" />,
        title: "Get AI Insights",
        description: "Receive personalized recommendations and spending analysis",
    },
    {
        number: "04",
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Achieve Goals",
        description: "Watch your savings grow and reach your financial goals",
    },
];

const HowItWorks = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-3xl opacity-70" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.Div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Take control of your finances in 4 simple steps.
                    </p>
                </motion.Div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <motion.Div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex flex-col items-center text-center relative">
                                <div className="relative mb-6">
                                    <span className="absolute -top-2 -right-2 bg-background text-xs font-bold py-1 px-2 rounded-full border">
                                        {step.number}
                                    </span>
                                    <div className="rounded-xl bg-card border p-4 shadow-sm">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground max-w-xs">
                                    {step.description}
                                </p>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-14 -right-4 text-muted-foreground">
                                        <ArrowRight className="h-6 w-6" />
                                    </div>
                                )}
                            </div>
                        </motion.Div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
