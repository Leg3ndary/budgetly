import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { title, content, company, position, properties } = body;

        const coverLetter = await prisma.coverLetter.create({
            data: {
                title,
                content,
                company,
                position,
                properties,
                userId: session.user.id,
            },
        });

        return NextResponse.json(coverLetter);
    } catch (error) {
        console.error("[COVER_LETTERS_POST]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const coverLetters = await prisma.coverLetter.findMany({
            where: {
                userId: session.user.id,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(coverLetters);
    } catch (error) {
        console.error("[COVER_LETTERS_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
