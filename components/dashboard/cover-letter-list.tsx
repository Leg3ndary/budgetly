"use client";

import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface CoverLetter {
    id: string;
    title: string;
    company: string;
    position: string;
    createdAt: string;
}

export default function CoverLetterList({ status }: { status: string }) {
    const [coverLetters, setCoverLetters] = useState<CoverLetter[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoverLetters = async () => {
            if (status === "unauthenticated") return;
            try {
                const response = await fetch("/api/cover-letters");
                if (!response.ok)
                    throw new Error("Failed to fetch cover letters");
                const data = await response.json();
                setCoverLetters(data);
            } catch (error) {
                console.error("Error fetching cover letters:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoverLetters();
    }, [status]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (coverLetters.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>No Cover Letters</CardTitle>
                    <CardDescription>
                        Create your first cover letter to get started
                    </CardDescription>
                </CardHeader>
            </Card>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coverLetters.map((letter) => (
                <Card key={letter.id}>
                    <CardHeader>
                        <CardTitle>{letter.title}</CardTitle>
                        <CardDescription>
                            {letter.position} at {letter.company}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Created{" "}
                            {formatDistanceToNow(new Date(letter.createdAt))}{" "}
                            ago
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
