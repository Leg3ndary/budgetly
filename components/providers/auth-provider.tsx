"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
export function AuthProvider({
    children,
    ...props
}: {
    children: React.ReactNode;
    session: Session;
}) {
    return <SessionProvider {...props}>{children}</SessionProvider>;
}
