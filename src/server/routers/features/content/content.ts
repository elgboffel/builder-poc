import { createTRPCRouter, publicProcedure } from "@server/trpc";
import { contentService } from "@server/routers/features/content/content-service";
import { z } from "zod";

export const contentRouter = createTRPCRouter({
  getSettings: publicProcedure.input(z.object({ preview: z.boolean() })).query(async ({ input }) => {
    return await contentService.getSettings(input.preview);
  }),
});
