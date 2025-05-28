"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
import {
    FileText,
    Home,
    CreditCard,
    Menu,
    X,
    LogIn,
    LogOut,
    User,
    Settings,
    HelpCircle,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
        ...(session
            ? [
                  {
                      name: "Dashboard",
                      href: "/dashboard",
                      icon: <FileText className="h-4 w-4 mr-2" />,
                  },
              ]
            : []),
        {
            name: "Pricing",
            href: "/pricing",
            icon: <CreditCard className="h-4 w-4 mr-2" />,
        },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <FileText className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl">Budgetly</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                                isActive(link.href)
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <ModeToggle />
                    {session ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-2">
                                    {session.user?.image ? (
                                        <Image
                                            src={session.user.image}
                                            alt={
                                                session.user.name ||
                                                "User Avatar"
                                            }
                                            width={24}
                                            height={24}
                                            className="h-6 w-6 rounded-full"
                                        />
                                    ) : (
                                        <User className="h-4 w-4" />
                                    )}
                                    {session.user?.name || "Account"}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <div className="flex items-center justify-start gap-2 p-2">
                                    <div className="flex flex-col space-y-1 leading-none">
                                        <p className="font-medium">
                                            {session.user?.name}
                                        </p>
                                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                                            {session.user?.email}
                                        </p>
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/settings"
                                        className="cursor-pointer"
                                    >
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/help"
                                        className="cursor-pointer"
                                    >
                                        <HelpCircle className="mr-2 h-4 w-4" />
                                        <span>Help</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => signOut()}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/login">
                            <Button variant="ghost" className="gap-2">
                                <LogIn className="h-4 w-4" />
                                Login
                            </Button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute w-full bg-background border-b border-border pb-4 shadow-md">
                    <nav className="container mx-auto flex flex-col gap-4 px-4 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center py-2 text-sm font-medium transition-colors hover:text-primary ${
                                    isActive(link.href)
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-t pt-4 mt-2">
                            {session ? (
                                <>
                                    <Link
                                        href="/settings"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start gap-2 mb-2"
                                        >
                                            <Settings className="h-4 w-4" />
                                            Settings
                                        </Button>
                                    </Link>
                                    <Link
                                        href="/help"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start gap-2 mb-2"
                                        >
                                            <HelpCircle className="h-4 w-4" />
                                            Help
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                        onClick={() => {
                                            signOut();
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <LogIn className="h-4 w-4" />
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
