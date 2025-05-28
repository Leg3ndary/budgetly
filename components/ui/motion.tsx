"use client";

import { useEffect, useRef, ReactNode } from "react";

type MotionProps = {
    children: ReactNode;
    initial: Record<string, any>;
    animate: Record<string, any>;
    transition?: Record<string, any>;
    className?: string;
};

export const motion = {
    Div: ({
        children,
        initial,
        animate,
        transition = {},
        className = "",
    }: MotionProps) => {
        const ref = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const element = ref.current;
            if (!element) return;

            // Set initial styles
            Object.entries(initial).forEach(([key, value]) => {
                if (key === "opacity") {
                    element.style.opacity = value.toString();
                } else if (key === "y") {
                    element.style.transform = `translateY(${value}px)`;
                } else if (key === "x") {
                    element.style.transform = `translateX(${value}px)`;
                } else if (key === "scale") {
                    element.style.transform = `scale(${value})`;
                }
            });

            // Apply transitions
            const duration = transition.duration || 0.3;
            const delay = transition.delay || 0;
            const ease = transition.ease || "cubic-bezier(0.4, 0, 0.2, 1)";

            element.style.transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`;

            // Create intersection observer
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Animate to final state when element is visible
                            Object.entries(animate).forEach(([key, value]) => {
                                if (key === "opacity") {
                                    element.style.opacity = value.toString();
                                } else if (key === "y") {
                                    element.style.transform = `translateY(${value}px)`;
                                } else if (key === "x") {
                                    element.style.transform = `translateX(${value}px)`;
                                } else if (key === "scale") {
                                    element.style.transform = `scale(${value})`;
                                }
                            });
                            // Unobserve after animation
                            observer.unobserve(element);
                        }
                    });
                },
                {
                    threshold: 0.1, // Trigger when 10% of the element is visible
                    rootMargin: "50px", // Start animation slightly before element comes into view
                },
            );

            observer.observe(element);

            return () => {
                observer.disconnect();
            };
        }, [initial, animate, transition]);

        return (
            <div ref={ref} className={className} style={{ opacity: 0 }}>
                {children}
            </div>
        );
    },

    H1: ({
        children,
        initial,
        animate,
        transition = {},
        className = "",
    }: MotionProps) => {
        const ref = useRef<HTMLHeadingElement>(null);

        useEffect(() => {
            const element = ref.current;
            if (!element) return;

            // Set initial styles
            Object.entries(initial).forEach(([key, value]) => {
                if (key === "opacity") {
                    element.style.opacity = value.toString();
                } else if (key === "y") {
                    element.style.transform = `translateY(${value}px)`;
                }
            });

            // Apply transitions
            const duration = transition.duration || 0.3;
            const delay = transition.delay || 0;
            const ease = transition.ease || "cubic-bezier(0.4, 0, 0.2, 1)";

            element.style.transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`;

            // Animate to final state
            const animateTimeout = setTimeout(() => {
                Object.entries(animate).forEach(([key, value]) => {
                    if (key === "opacity") {
                        element.style.opacity = value.toString();
                    } else if (key === "y") {
                        element.style.transform = `translateY(${value}px)`;
                    }
                });
            }, 10);

            return () => clearTimeout(animateTimeout);
        }, [initial, animate, transition]);

        return (
            <h1 ref={ref} className={className} style={{ opacity: 0 }}>
                {children}
            </h1>
        );
    },

    P: ({
        children,
        initial,
        animate,
        transition = {},
        className = "",
    }: MotionProps) => {
        const ref = useRef<HTMLParagraphElement>(null);

        useEffect(() => {
            const element = ref.current;
            if (!element) return;

            // Set initial styles
            Object.entries(initial).forEach(([key, value]) => {
                if (key === "opacity") {
                    element.style.opacity = value.toString();
                } else if (key === "y") {
                    element.style.transform = `translateY(${value}px)`;
                }
            });

            // Apply transitions
            const duration = transition.duration || 0.3;
            const delay = transition.delay || 0;
            const ease = transition.ease || "cubic-bezier(0.4, 0, 0.2, 1)";

            element.style.transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`;

            // Animate to final state
            const animateTimeout = setTimeout(() => {
                Object.entries(animate).forEach(([key, value]) => {
                    if (key === "opacity") {
                        element.style.opacity = value.toString();
                    } else if (key === "y") {
                        element.style.transform = `translateY(${value}px)`;
                    }
                });
            }, 10);

            return () => clearTimeout(animateTimeout);
        }, [initial, animate, transition]);

        return (
            <p ref={ref} className={className} style={{ opacity: 0 }}>
                {children}
            </p>
        );
    },
};

export default motion;
