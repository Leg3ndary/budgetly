"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import {
    FileText,
    Sparkles,
    Clock,
    Download,
    Users,
    Layers,
} from "lucide-react";

const features = [
    {
        icon: <Sparkles className="h-10 w-10 text-primary" />,
        title: "AI-Powered",
        description:
            "Our advanced AI analyzes your spending patterns and suggests personalized budget optimizations.",
    },
    {
        icon: <FileText className="h-10 w-10 text-chart-1" />,
        title: "Smart Categories",
        description:
            "Automatically categorize your expenses and income with our intelligent tracking system.",
    },
    {
        icon: <Clock className="h-10 w-10 text-chart-2" />,
        title: "Real-Time Tracking",
        description:
            "Monitor your spending and savings in real-time with instant notifications and updates.",
    },
    {
        icon: <Download className="h-10 w-10 text-chart-3" />,
        title: "Detailed Reports",
        description:
            "Generate comprehensive financial reports and insights to track your progress.",
    },
    {
        icon: <Users className="h-10 w-10 text-chart-4" />,
        title: "Expert Insights",
        description:
            "Get personalized financial advice and recommendations from our AI-powered system.",
    },
    {
        icon: <Layers className="h-10 w-10 text-chart-5" />,
        title: "Multiple Budgets",
        description:
            "Create and manage multiple budgets for different financial goals and scenarios.",
    },
];

const Features = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-chart-2/10 rounded-full blur-3xl opacity-70" />

            <div className="container mx-auto px-4">
                <motion.Div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Powerful Features for Smart Budgeting
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our comprehensive toolset helps you take control of your finances and achieve your financial goals.
                    </p>
                </motion.Div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl items-center justify-center mx-auto">
                    {features.map((feature, index) => (
                        <motion.Div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-card border rounded-xl p-8 h-full group-hover:shadow-md transition-shadow duration-300 relative z-10 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-[2px] pointer-events-none z-0"></div>

                                <div className="relative z-10">
                                    <div className="mb-5">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="absolute -bottom-1/2 -right-1/2 w-1/2 h-1/2 bg-gradient-to-tl from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>
                            </div>
                        </motion.Div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
