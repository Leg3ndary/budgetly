"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FileText, Download, Edit, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

const statsData = [
    {
        title: "Cover Letters",
        value: "3",
        description: "Total created",
        trend: "+1 this week",
        icon: FileText,
        color: "text-primary",
    },
    {
        title: "Downloads",
        value: "12",
        description: "PDF & DOCX exports",
        trend: "+5 this week",
        icon: Download,
        color: "text-chart-1",
    },
    {
        title: "Edited",
        value: "8",
        description: "Revision sessions",
        trend: "+2 this week",
        icon: Edit,
        color: "text-chart-2",
    },
    {
        title: "Applications",
        value: "5",
        description: "Jobs applied to",
        trend: "+1 this week",
        icon: Briefcase,
        color: "text-chart-5",
    },
];

const StatsCards = () => {
    const [cardData, setCardData] = useState(statsData);

    useEffect(() => {
        fetch("/api/stats/card").then(async (res) => {
            if (res.ok) {
                setCardData(await res.json());
            }
        })
    }, []);

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cardData.map((stat, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            {stat.title}
                        </CardTitle>
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground">
                            {stat.description}
                        </p>
                        <div className="mt-2 text-xs font-medium text-green-500">
                            {stat.trend}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default StatsCards;
