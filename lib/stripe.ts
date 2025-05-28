import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-04-30.basil",
    typescript: true,
});

export const getStripePriceId = (plan: "pro" | "premium") => {
    switch (plan) {
        case "pro":
            return process.env.STRIPE_PRO_PRICE_ID;
        case "premium":
            return process.env.STRIPE_PREMIUM_PRICE_ID;
        default:
            throw new Error("Invalid plan");
    }
};
