"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui";
import { Download, Copy, Share, Edit, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "@/components/ui/motion";

export default function CoverLetterClient() {
    const { status } = useSession();
    const router = useRouter();
    const params = useParams();
    const letterId = params.id;
    const [mounted, setMounted] = useState(false);

    // Mock data - in a real app, you would fetch this data based on the ID
    const coverLetter = {
        id: letterId,
        title: "Software Engineer at Google",
        recipient: "Hiring Manager",
        company: "Google",
        createdAt: "April 12, 2025",
        content: `
Dear Hiring Manager,

I am writing to express my interest in the Software Engineer position at Google. With my strong background in full-stack development and my passion for creating innovative solutions, I believe I would be a valuable addition to your team.

For the past five years, I have been developing web applications using modern JavaScript frameworks such as React and Angular, along with backend technologies including Node.js and Python. My experience at InnovateTech has given me the opportunity to work on high-traffic applications serving millions of users, where I implemented performance optimizations that reduced load times by 40%.

I am particularly drawn to Google's mission to organize the world's information and make it universally accessible and useful. The prospect of working on products that impact billions of users worldwide excites me, and I am eager to contribute my technical skills and creative problem-solving abilities to this endeavor.

My accomplishments include:
• Leading the development of a real-time data visualization platform that processed over 10TB of data daily
• Implementing CI/CD pipelines that reduced deployment time by 60%
• Contributing to open-source projects, with over 500 stars on my GitHub repositories
• Mentoring junior developers and conducting technical workshops within my organization

I am confident that my technical expertise, combined with my collaborative approach and dedication to writing clean, efficient code, makes me an excellent candidate for this position. I am excited about the possibility of joining Google and would welcome the opportunity to discuss how my skills align with your team's needs.

Thank you for considering my application. I look forward to the possibility of contributing to Google's innovative work.

Sincerely,
John Doe
    `,
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/");
        }
    }, [status, router]);

    if (!mounted || status === "loading") return null;

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.Div
                    className="mb-8 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/dashboard">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">
                            {coverLetter.title}
                        </h1>
                        <p className="text-muted-foreground">
                            Created on {coverLetter.createdAt}
                        </p>
                    </div>
                </motion.Div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <motion.Div
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Cover Letter Preview</CardTitle>
                                <CardDescription>
                                    How your cover letter looks to employers
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-card border rounded-md p-8 whitespace-pre-line font-serif">
                                    {coverLetter.content}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2 flex-wrap">
                                <Button variant="outline" className="gap-2">
                                    <Download className="h-4 w-4" />
                                    Download PDF
                                </Button>
                                <Button variant="outline" className="gap-2">
                                    <Download className="h-4 w-4" />
                                    Download DOCX
                                </Button>
                                <Button variant="outline" className="gap-2">
                                    <Copy className="h-4 w-4" />
                                    Copy Text
                                </Button>
                                <Button variant="outline" className="gap-2">
                                    <Share className="h-4 w-4" />
                                    Share
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.Div>

                    <motion.Div
                        className="w-full lg:w-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Cover Letter Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Company
                                    </h3>
                                    <p className="font-medium">
                                        {coverLetter.company}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Recipient
                                    </h3>
                                    <p className="font-medium">
                                        {coverLetter.recipient}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Template
                                    </h3>
                                    <p className="font-medium">
                                        Modern Professional
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Created
                                    </h3>
                                    <p className="font-medium">
                                        {coverLetter.createdAt}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    href={`/cover-letter/${letterId}/edit`}
                                    className="w-full"
                                >
                                    <Button className="w-full gap-2">
                                        <Edit className="h-4 w-4" />
                                        Edit Cover Letter
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>AI Feedback</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-sm">
                                        Your cover letter is well-structured and
                                        highlights relevant experience. Consider
                                        these improvements:
                                    </p>
                                    <ul className="text-sm list-disc pl-5 space-y-2">
                                        <li>
                                            Add more specific examples of your
                                            achievements
                                        </li>
                                        <li>
                                            Quantify your impact with more
                                            metrics
                                        </li>
                                        <li>
                                            Align your skills more closely with
                                            the job description
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    Get Full AI Review
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.Div>
                </div>
            </div>
        </div>
    );
}
