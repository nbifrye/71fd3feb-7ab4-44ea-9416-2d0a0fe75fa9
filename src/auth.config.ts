import GitHub from "@auth/core/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      return Boolean(auth);
    },
  },
} satisfies NextAuthConfig;
