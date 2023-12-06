import { protectedProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";

const ChatRouter = createTRPCRouter({
  getChats: protectedProcedure
    .input(
      z.object({
        roomID: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      console.log(input.roomID);
    }),
});

export default ChatRouter;
