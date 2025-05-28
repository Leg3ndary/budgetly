"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    {
        apiVersion: "2025-04-30.basil",
    },
);

interface CheckoutButtonProps {
    plan: "pro" | "premium" | "enterprise";
    className?: string;
    children: React.ReactNode;
}

export function CheckoutButton({
    plan,
    className,
    children,
}: CheckoutButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        try {
            setIsLoading(true);

            const response = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ plan }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(
                    error.message || "Failed to create checkout session",
                );
            }

            const { sessionId } = await response.json();
            const stripe = await stripePromise;

            if (!stripe) {
                throw new Error("Failed to initialize Stripe");
            }

            const { error } = await stripe.redirectToCheckout({
                sessionId,
            });

            if (error) {
                throw new Error(error.message);
            }
        } catch (error) {
            console.error("Checkout error:", error);
            // You might want to show a toast or error message to the user here
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            onClick={handleCheckout}
            disabled={isLoading}
            className={className}
        >
            {isLoading ? "Loading..." : children}
        </Button>
    );
}
