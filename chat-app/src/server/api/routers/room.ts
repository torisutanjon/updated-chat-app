import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { decrypt, encrypt } from "@/utils/crypting";

const roomRouter = createTRPCRouter({
  getChatById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      //find id in room collection
      const room = await ctx.db.room.findFirst({
        where: {
          id: input.id,
        },
      });
      if (room) return room;
      //if no room was found create a new one prolly it is an id from a user

      const hasRoom = await ctx.db.room.findFirst({
        where: {
          AND: [
            {
              roomType: "peer",
            },
            {
              participants: {
                hasEvery: [input.id, ctx.session.user.id],
              },
            },
          ],
        },
      });

      //peer to peer for both users already exists
      if (hasRoom) return hasRoom;

      const user = await ctx.db.user.findFirst({
        where: {
          id: input.id,
        },
      });

      if (!user)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to find user info",
        });

      const createdRoom = await ctx.db.room.create({
        data: {
          roomName: `${input.id}/${ctx.session.user.id}`, // more better naming
          alternativeRoomNames: [ctx.session.user.name!, user.name!],
          roomType: "peer",
          participants: [input.id, ctx.session.user.id],
        },
      });

      if (!createdRoom)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to find chat please try again",
        });

      return createdRoom;
    }),
  addRoom: protectedProcedure
    .input(
      z.object({
        roomName: z.string(),
        roomType: z.string(),
        roomPassword: z.union([z.string(), z.undefined()]),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const room = await ctx.db.room.findFirst({
        where: {
          roomName: input.roomName,
        },
        select: {
          roomName: true,
        },
      });

      if (room)
        throw new TRPCError({
          code: "CONFLICT",
          message: `Room with name ${input.roomName} already existed`,
        });

      const roomCreated = await ctx.db.room.create({
        data: {
          roomName: input.roomName,
          roomType: input.roomType,
          roomPassword: input.roomPassword ? encrypt(input.roomPassword) : null,
        },
      });

      if (!roomCreated)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Room creation failed`,
        });

      return { message: "Room Created" };
    }),

  getAllRooms: protectedProcedure.query(async ({ ctx }) => {
    const rooms = await ctx.db.room.findMany({});
    if (!rooms)
      throw new TRPCError({ code: "NOT_FOUND", message: "No Rooms found" });
    return rooms;
  }),
  search: protectedProcedure
    .input(
      z.object({
        search: z.union([z.string(), z.undefined()]),
      }),
    )
    .query(async ({ input, ctx }) => {
      const users = await ctx.db.user.findMany({
        where: {
          AND: [
            input.search === ""
              ? {}
              : {
                  name: {
                    contains: input.search,
                    mode: "insensitive",
                  },
                },
          ],
        },
      });

      const rooms = await ctx.db.room.findMany({
        where: {
          AND: [
            input.search === ""
              ? {}
              : {
                  roomName: {
                    contains: input.search,
                    mode: "insensitive",
                  },
                },
          ],
        },
      });

      const modifiedUsersData = users.map((user) => ({
        ...user,
        type: "user",
      }));
      const modifiedRoomsData = rooms.map((room) => ({
        ...room,
        type: "room",
      }));

      return [...modifiedUsersData, ...modifiedRoomsData];
    }),
  checkRoomPassword: protectedProcedure
    .input(
      z.object({
        roomID: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const room = await ctx.db.room.findFirst({
        where: {
          id: input.roomID,
        },
      });

      if (!room)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "INTERNAL SERVER ERROR",
        });

      const verifyPassword = input.password === decrypt(room.roomPassword!);

      if (verifyPassword === false)
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Wrong room password",
        });
      return true;
    }),
});

export default roomRouter;
