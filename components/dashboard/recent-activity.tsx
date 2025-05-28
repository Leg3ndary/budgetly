"use client";

import { FileText, Edit, Download, Copy } from "lucide-react";

const activityData = [
    {
        id: 1,
        action: "Created cover letter",
        target: "Software Engineer at Google",
        time: "2 days ago",
        icon: FileText,
    },
    {
        id: 2,
        action: "Downloaded cover letter",
        target: "Software Engineer at Google",
        time: "2 days ago",
        icon: Download,
    },
    {
        id: 3,
        action: "Edited cover letter",
        target: "Product Manager at Apple",
        time: "4 days ago",
        icon: Edit,
    },
    {
        id: 4,
        action: "Created cover letter",
        target: "Product Manager at Apple",
        time: "4 days ago",
        icon: FileText,
    },
    {
        id: 5,
        action: "Duplicated cover letter",
        target: "UX Designer at Netflix",
        time: "1 week ago",
        icon: Copy,
    },
];

const RecentActivity = () => {
    return (
        <div className="space-y-6">
            {activityData.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-muted p-2">
                        <activity.icon className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="text-sm font-medium leading-none">
                            {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            {activity.target}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            {activity.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentActivity;
