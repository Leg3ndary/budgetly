"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does the AI budget management work?",
        answer: "Our AI analyzes your spending patterns, income, and financial goals to create a personalized budget plan. It identifies areas for potential savings, suggests optimizations, and helps you track your progress towards your financial goals.",
    },
    {
        question: "Is my financial information secure?",
        answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. We don't share your information with third parties, and you can delete your data at any time from your account settings.",
    },
    {
        question: "Can I create multiple budgets?",
        answer: "Yes! Depending on your subscription plan, you can create multiple custom budgets. This is perfect for managing different financial goals, such as saving for a house, planning a vacation, or managing monthly expenses.",
    },
    {
        question: "How do I track my expenses?",
        answer: "You can connect your bank accounts for automatic tracking, manually enter transactions, or upload bank statements. Our system will automatically categorize your expenses and provide insights on your spending patterns.",
    },
    {
        question: "Can I modify my budget after creating it?",
        answer: "Yes, you have full editing capabilities. After the AI generates your initial budget, you can modify any part of it to match your preferences or add additional categories that are important for your financial planning.",
    },
];

const FAQ = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-chart-3/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.Div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about our cover letter
                        generator
                    </p>
                </motion.Div>

                <motion.Div
                    className="max-w-3xl mx-auto bg-card border rounded-xl p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-[1px] rounded-xl pointer-events-none"></div>

                    <Accordion
                        type="single"
                        collapsible
                        className="relative z-10"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-medium text-lg py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.Div>
            </div>
        </section>
    );
};

export default FAQ;
