import { createTRPCRouter } from "./trpc";
import { contentRouter } from "@server/routers/features/content/content";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  content: contentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
