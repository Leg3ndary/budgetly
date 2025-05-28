"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "@/components/ui/motion";
import { CheckoutButton } from "@/components/stripe/checkout-button";

interface Feature {
    name: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    description: string;
    price: string;
    duration: string;
    features: Feature[];
    ctaText: string;
    ctaLink?: string;
    plan?: "pro" | "premium" | "enterprise";
    popular: boolean;
    highlightColor: string;
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Free",
        description: "Test out the platform for free",
        price: "$0",
        duration: "forever",
        features: [
            { name: "3 Budget Plans", included: true },
            { name: "Basic expense tracking", included: true },
            { name: "Monthly reports", included: true },
            { name: "AI Spending Analysis", included: true },
            { name: "Save your information", included: true },
            { name: "Premium features", included: false },
            { name: "Unlimited budgets", included: false },
            { name: "Advanced AI insights", included: false },
            { name: "Priority support", included: false },
        ],
        ctaText: "Get Started",
        ctaLink: "/login",
        popular: false,
        highlightColor: "bg-muted",
    },
    {
        name: "Pro",
        description: "Perfect for active budgeters",
        price: "$20.00",
        duration: "per month",
        features: [
            { name: "100 budget plans", included: true },
            { name: "Advanced expense tracking", included: true },
            { name: "Detailed reports & analytics", included: true },
            { name: "Full AI insights", included: true },
            { name: "Multiple budget versions", included: true },
            { name: "Premium features", included: true },
            { name: "Category-specific tips", included: true },
            { name: "Advanced AI assistance", included: false },
            { name: "Priority support", included: false },
        ],
        ctaText: "Subscribe Now",
        plan: "pro" as const,
        popular: false,
        highlightColor: "bg-primary",
    },
    {
        name: "Enterprise",
        description: "For businesses and teams",
        price: "Custom",
        duration: "per month",
        features: [
            { name: "Unlimited budgets", included: true },
            { name: "Team collaboration", included: true },
            { name: "Advanced analytics", included: true },
            { name: "Custom integrations", included: true },
            { name: "Dedicated support", included: true },
            { name: "API access", included: true },
            { name: "Custom reporting", included: true },
            { name: "Advanced AI assistance", included: true },
            { name: "Priority support", included: true },
        ],
        ctaText: "Contact Sales",
        plan: "enterprise" as const,
        popular: true,
        highlightColor: "bg-chart-1",
    },
];

export default function PricingPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="py-20 px-4 overflow-hidden relative">
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-[5%] w-56 h-56 bg-chart-1/10 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.Div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that's right for your financial journey.
                        Cancel anytime.
                    </p>
                </motion.Div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.Div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className={`h-full rounded-xl border ${
                                    plan.popular
                                        ? "border-primary shadow-lg"
                                        : "border-border"
                                } overflow-hidden`}
                            >
                                <div className="relative">
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0">
                                            <div className="bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-bl-lg">
                                                MOST POPULAR
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-6 border-b">
                                        <h3 className="text-xl font-bold mb-2">
                                            {plan.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {plan.description}
                                        </p>
                                        <div className="flex items-end mb-2">
                                            <span className="text-3xl md:text-4xl font-bold">
                                                {plan.price}
                                            </span>
                                            <span className="text-muted-foreground ml-2">
                                                /{plan.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Features list */}
                                <div className="p-6">
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-start"
                                                >
                                                    {feature.included ? (
                                                        <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                                                    ) : (
                                                        <X className="h-5 w-5 text-muted-foreground shrink-0 mr-3" />
                                                    )}
                                                    <span
                                                        className={
                                                            feature.included
                                                                ? ""
                                                                : "text-muted-foreground"
                                                        }
                                                    >
                                                        {feature.name}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                                <div className="p-6 mt-auto">
                                    {plan.plan ? (
                                        <CheckoutButton
                                            plan={plan.plan}
                                            className="w-full mt-auto"
                                        >
                                            {plan.ctaText}
                                        </CheckoutButton>
                                    ) : (
                                        <Link href={plan.ctaLink!}>
                                            <Button
                                                className="w-full"
                                                variant={
                                                    plan.popular
                                                        ? "default"
                                                        : "outline"
                                                }
                                            >
                                                {plan.ctaText}
                                            </Button>
                                        </Link>
                                    )}
                                </div>

                                <div
                                    className={`h-1 w-full ${plan.highlightColor}`}
                                ></div>
                            </div>
                        </motion.Div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.Div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Need something different?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                            We also offer custom enterprise plans for businesses
                            and financial institutions. Contact our sales team
                            for more information.
                        </p>
                        <Link href="/contact">
                            <Button variant="outline" size="lg">
                                Contact Sales
                            </Button>
                        </Link>
                    </motion.Div>
                </div>
            </div>
        </div>
    );
}
