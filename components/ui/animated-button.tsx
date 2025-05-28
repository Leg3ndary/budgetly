"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export function AnimatedButton({
    children,
    className,
    ...props
}: AnimatedButtonProps) {
    return (
        <button
            className={cn(
                "relative inline-flex min-w-[120px] min-h-[32px] px-4 border-none",
                className,
            )}
            {...props}
        >
            <span className="absolute inset-0 flex items-center justify-center bg-background rounded-md z-10">
                {children}
            </span>
            <span className="absolute inset-[1px] rounded-md bg-gradient-to-r from-[#007cf0] via-[#00dfd8] via-[#ff0080] to-[#007cf0] bg-[length:400%_100%] animate-gradient" />
            <span className="absolute inset-[1px] rounded-md bg-gradient-to-r from-[#007cf0] via-[#00dfd8] via-[#ff0080] to-[#007cf0] bg-[length:400%_100%] animate-gradient blur-md opacity-50" />
        </button>
    );
}
