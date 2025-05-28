import { NextResponse } from "next/server";
import { stripe, getStripePriceId } from "@/lib/stripe";

export async function POST(req: Request) {
    try {
        const { plan } = await req.json();

        if (!plan || (plan !== "pro" && plan !== "premium")) {
            return NextResponse.json(
                { error: "Invalid plan selected" },
                { status: 400 },
            );
        }

        const priceId = getStripePriceId(plan);

        if (!priceId) {
            return NextResponse.json(
                { error: "Price ID not found for selected plan" },
                { status: 400 },
            );
        }

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: "subscription",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json(
            { error: "Error creating checkout session" },
            { status: 500 },
        );
    }
}
