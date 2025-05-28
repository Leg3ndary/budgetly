"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const steps = [
    {
        id: 1,
        title: "Basic Information",
        description: "Enter the basic details about your application",
    },
    {
        id: 2,
        title: "Job Description",
        description: "Paste the job description to analyze requirements",
    },
    {
        id: 3,
        title: "Customize",
        description: "Review and customize your cover letter",
    },
];

export default function NewCoverLetterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        company: "",
        position: "",
        jobDescription: "",
        properties: {},
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/cover-letters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to create cover letter");

            router.push("/dashboard");
            router.refresh();
        } catch (error) {
            console.error("Error creating cover letter:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g., Software Engineer Application"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="e.g., Google"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="position">Position</Label>
                            <Input
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="e.g., Software Engineer"
                                required
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="jobDescription">
                                Job Description
                            </Label>
                            <Textarea
                                id="jobDescription"
                                name="jobDescription"
                                value={formData.jobDescription}
                                onChange={handleChange}
                                placeholder="Paste the job description here..."
                                className="min-h-[300px]"
                                required
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="content">
                                Cover Letter Content
                            </Label>
                            <Textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Your cover letter will be generated here..."
                                className="min-h-[400px]"
                                required
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="h-screen flex flex-col">
                <div className="flex-none p-6 border-b">
                    <div className="flex items-center justify-between">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex-1 text-center ${
                                    currentStep >= step.id
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                                        currentStep >= step.id
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted"
                                    }`}
                                >
                                    {step.id}
                                </div>
                                <div className="text-sm font-medium">
                                    {step.title}
                                </div>
                                <div className="text-xs">
                                    {step.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 p-6 overflow-auto">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>
                                {steps[currentStep - 1].title}
                            </CardTitle>
                            <CardDescription>
                                {steps[currentStep - 1].description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 h-full"
                            >
                                {renderStepContent()}

                                <div className="flex justify-between gap-4 mt-auto">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => router.back()}
                                    >
                                        Cancel
                                    </Button>
                                    <div className="flex gap-4">
                                        {currentStep > 1 && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={prevStep}
                                            >
                                                Previous
                                            </Button>
                                        )}
                                        {currentStep < steps.length ? (
                                            <Button
                                                type="button"
                                                onClick={nextStep}
                                            >
                                                Next
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading
                                                    ? "Creating..."
                                                    : "Create Cover Letter"}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
