import NextAuth from "next-auth";
import { UnstorageAdapter } from "@/lib/unstorage-adapter";
import { createStorage } from "unstorage";
import redisJSONDriver from "@/lib/redis-json-driver";
import authConfig from "@/auth.config";

const storage = createStorage({
  driver: redisJSONDriver({
    username: "default",
  }),
});

export const { handlers, auth } = NextAuth({
  adapter: UnstorageAdapter(storage, { useItemRaw: true }),
  session: { strategy: "jwt" },
  ...authConfig,
});
