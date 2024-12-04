import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const AccountRouter = createTRPCRouter({
  getAccounts: privateProcedure.query(async ({ ctx }) => {
    return await ctx.db.account.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      select: {
        id: true,
        email: true,
      },
    });
  }),
});
