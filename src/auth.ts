import NextAuth from "next-auth"
import Github from 'next-auth/providers/github';

import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/db/client"
import { accounts, authenticators, sessions, users, verificationTokens } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    authenticatorsTable: authenticators,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Github,
  ],
})
