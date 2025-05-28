"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FileText,
    User,
    Settings,
    HelpCircle,
    CreditCard,
    FileSpreadsheet,
    History,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Cover Letters",
        href: "/cover-letters",
        icon: FileText,
    },
    {
        title: "Templates",
        href: "/templates",
        icon: FileSpreadsheet,
    },
    {
        title: "History",
        href: "/history",
        icon: History,
    },
    {
        title: "Profile",
        href: "/profile",
        icon: User,
    },
    {
        title: "Billing",
        href: "/billing",
        icon: CreditCard,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
    {
        title: "Help & Support",
        href: "/help",
        icon: HelpCircle,
    },
];

const DashboardSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 z-30 h-screen bg-card/80 backdrop-blur-sm border-r transition-all duration-300 md:relative lg:block",
                isCollapsed ? "w-[70px]" : "w-[250px]",
            )}
        >
            <div className="flex h-full flex-col">
                <div
                    className={cn(
                        "flex h-16 items-center border-b px-4",
                        isCollapsed ? "justify-center" : "justify-between",
                    )}
                >
                    {!isCollapsed && (
                        <Link href="/" className="flex items-center gap-2">
                            <FileText className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">
                                Budgetly
                            </span>
                        </Link>
                    )}

                    {isCollapsed && (
                        <Link
                            href="/"
                            className="flex items-center justify-center"
                        >
                            <FileText className="h-6 w-6 text-primary" />
                        </Link>
                    )}

                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "h-8 w-8",
                            isCollapsed ? "rotate-180" : "",
                        )}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                </div>

                <div className="flex-1 overflow-auto py-6">
                    <nav className="grid gap-1 px-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                                    pathname === item.href
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground",
                                    isCollapsed ? "justify-center" : "",
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "h-5 w-5",
                                        isCollapsed ? "mr-0" : "mr-2",
                                    )}
                                />
                                {!isCollapsed && <span>{item.title}</span>}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
