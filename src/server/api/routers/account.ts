// import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

// export const mailsRouter = createTRPCRouter({
//   getAccounts: protectedProcedure.query(async ({ ctx }) => {
//     return await ctx.db.account.findMany({
//       where: {
//         userId: ctx.auth.userId,
//       },
//       select: {
//         id: true,
//         email: true,
//       },
//     });
//   }),
// });
