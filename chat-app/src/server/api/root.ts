import {
  accountRouter,
  userRouter,
  roomRouter,
  notificationsRouter,
  ChatRouter,
} from "./routers";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  account: accountRouter,
  user: userRouter,
  room: roomRouter,
  notification: notificationsRouter,
  chat: ChatRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
