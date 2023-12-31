import NextAuth from "next-auth";
import { UnstorageAdapter } from "@/lib/unstorage-adapter";
import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs";
import authConfig from "@/auth.config";

const storage = createStorage({
  driver: fsDriver({ base: "./storage" }),
});

export const { handlers, auth } = NextAuth({
  adapter: UnstorageAdapter(storage),
  session: { strategy: "jwt" },
  ...authConfig,
});
