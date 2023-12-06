import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const notificationsRouter = createTRPCRouter({
  getNotifications: protectedProcedure.query(async ({ ctx }) => {
    try {
      const notifications = await ctx.db.notification.findMany({
        where: {
          userId: ctx.session.user.id,
        },
        orderBy: {
          timeSent: "desc",
        },
      });

      return notifications;
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  notificationRead: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const updatedNotfication = await ctx.db.notification.update({
        where: {
          id: input.id,
        },
        data: {
          read: true,
        },
      });

      if (!updatedNotfication)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Notification data not found",
        });

      return true;
    }),
});

export default notificationsRouter;
