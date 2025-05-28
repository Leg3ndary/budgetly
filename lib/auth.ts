import NextAuth from "next-auth";
import type { DefaultSession, User, Account, Profile } from "next-auth";
import type { AdapterUser } from "@auth/core/adapters";
import type { JWT } from "next-auth/jwt";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}

export const authOptions: NextAuthConfig = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn(params: {
            user: User | AdapterUser;
            account?: Account | null;
            profile?: Profile;
        }) {
            console.log("signIn callback", params);
            return true;
        },
        async jwt(params: {
            token: JWT;
            user?: User;
            account?: Account | null;
            profile?: Profile;
        }) {
            console.log("jwt callback", params);
            if (params.user?.id) {
                params.token.id = params.user.id;
            }
            return params.token;
        },
        async session(params: { session: any; token: JWT; user?: User }) {
            console.log("session callback", params);
            if (params.token?.id && params.session.user) {
                params.session.user.id = params.token.id;
            }
            return params.session;
        },
    },
    trustHost: true,
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth(authOptions);
