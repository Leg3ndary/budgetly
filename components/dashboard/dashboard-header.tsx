"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-4 sm:px-6">
                <div className="md:hidden mr-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>

                {/* Search */}
                <div className="flex-1 flex items-center ml-2 md:ml-0">
                    <div className="relative w-full max-w-md hidden md:flex">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search cover letters..."
                            className="pl-8 bg-background"
                        />
                    </div>
                </div>

                {/* Right side actions */}
                <div className="flex items-center gap-2">
                    <ModeToggle />

                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
