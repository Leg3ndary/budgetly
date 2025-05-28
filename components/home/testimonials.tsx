"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Software Engineer",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        stars: 5,
        text: "Budgetly helped me take control of my finances! The AI suggestions made my budget planning so much easier. I saved 30% more in just the first month.",
    },
    {
        name: "Michael Chen",
        role: "Marketing Specialist",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        stars: 5,
        text: "After struggling with my finances for months, I tried Budgetly and had a clear budget plan in under 15 minutes. The features are comprehensive and the insights are invaluable.",
    },
    {
        name: "Jessica Martinez",
        role: "UX Designer",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        stars: 4,
        text: "The category-specific budgeting was perfect for my financial goals. Budgetly understood exactly which expenses to track and optimize for my lifestyle. Worth every penny!",
    },
    {
        name: "David Wilson",
        role: "Financial Analyst",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        stars: 5,
        text: "The industry-specific templates were perfect for my finance job applications. CoverCraft understood exactly which qualifications to emphasize for my field. Worth every penny!",
    },
];

const Testimonials = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.Div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        What Our Users Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Join thousands of job seekers who&apos;ve found success
                        with CoverCraft
                    </p>
                </motion.Div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.Div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-card border rounded-xl p-8 h-full hover:shadow-md transition-shadow duration-300 relative">
                                {/* Glass effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-[1px] rounded-xl pointer-events-none"></div>

                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 text-muted/10">
                                    <Quote className="h-20 w-20" />
                                </div>

                                <div className="relative z-10">
                                    {/* Star rating */}
                                    <div className="flex mb-6 text-chart-4">
                                        {[...Array(testimonial.stars)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-current"
                                                />
                                            ),
                                        )}
                                        {[...Array(5 - testimonial.stars)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i + testimonial.stars}
                                                    className="h-5 w-5 text-muted"
                                                />
                                            ),
                                        )}
                                    </div>

                                    {/* Testimonial text */}
                                    <p className="text-muted-foreground mb-6 italic">
                                        &quot;{testimonial.text}&quot;
                                    </p>

                                    {/* User info */}
                                    <div className="flex items-center">
                                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.Div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
