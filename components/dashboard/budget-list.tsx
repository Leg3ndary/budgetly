"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

interface Budget {
    id: string;
    title: string;
    amount: number;
    spent: number;
    category: string;
    period: string;
}

export default function BudgetList() {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const response = await fetch("/api/budgets");
                const data = await response.json();
                setBudgets(data);
            } catch (error) {
                console.error("Error fetching budgets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBudgets();
    }, []);

    if (loading) {
        return <div>Loading budgets...</div>;
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {budgets.map((budget) => (
                <Card key={budget.id}>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>{budget.title}</span>
                            <span className="text-sm text-muted-foreground">
                                {budget.period}
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Budget:</span>
                                <span>{formatCurrency(budget.amount)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Spent:</span>
                                <span>{formatCurrency(budget.spent)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Remaining:</span>
                                <span>
                                    {formatCurrency(
                                        budget.amount - budget.spent,
                                    )}
                                </span>
                            </div>
                            <div className="mt-4">
                                <Link href={`/budget/${budget.id}`}>
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
