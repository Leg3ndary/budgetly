import Link from "next/link";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import StatsCards from "@/components/dashboard/stats-cards";
import RecentActivity from "@/components/dashboard/recent-activity";
import { PlusCircle } from "lucide-react";
import { motion } from "@/components/ui/motion";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import BudgetList from "@/components/dashboard/budget-list";

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className="container mx-auto py-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <Link href="/budget/new">
                    <Button>Create New Budget</Button>
                </Link>
            </div>
            <BudgetList />
        </div>
    );
}
