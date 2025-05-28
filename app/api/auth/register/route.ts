import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json();

        if (!email || !password || !name) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        const client = await clientPromise;
        const usersCollection = client.db("Budgetly").collection("users");

        // Check if user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 },
            );
        }

        const hashedPassword = await hash(password, 10);

        const result = await usersCollection.insertOne({
            email,
            password: hashedPassword,
            name,
            createdAt: new Date(),
        });

        return NextResponse.json(
            {
                user: {
                    id: result.insertedId.toString(),
                    email,
                    name,
                },
            },
            { status: 201 },
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Error creating user" },
            { status: 500 },
        );
    }
}
