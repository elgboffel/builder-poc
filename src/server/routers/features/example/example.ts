import { createTRPCRouter, publicProcedure } from "@server/trpc";

export const exampleRouter = createTRPCRouter({
  getText: publicProcedure.query(async () => {
    return "Hello world";
  }),
});
