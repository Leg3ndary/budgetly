import Link from "next/link";
import { FileText, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t bg-card">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <FileText className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl">
                                Budgetly
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Take control of your finances with our AI-powered budget management tool.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/features"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/templates"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/help"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/community"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookies"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/security"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Security
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Budgetly. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link
                            href="/privacy"
                            className="hover:text-primary transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-primary transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/sitemap"
                            className="hover:text-primary transition-colors"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
