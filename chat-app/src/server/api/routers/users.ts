import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

const userRouter = createTRPCRouter({
  getFriends: protectedProcedure.query(async ({ ctx }) => {
    const friends = await ctx.db.user.findMany({
      where: {
        friends: {
          has: ctx.session.user.id,
        },
      },
    });

    if (!friends)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "INTERNAL SERVER ERROR",
      });

    return friends;
  }),
  getUsers: protectedProcedure
    .input(
      z.object({
        isFriends: z.union([z.boolean(), z.null()]),
        search: z.union([z.string(), z.null()]),
      }),
    )
    .query(async ({ input: { isFriends, search }, ctx }) => {
      //split the name of the user here
      console.log(search);
      const userProfile = await ctx.db.user.findFirst({
        where: {
          id: ctx.session.user.id,
        },
      });

      if (!userProfile)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User session not found",
        });

      const users = await ctx.db.user.findMany({
        where: {
          AND: [
            isFriends === true
              ? {
                  friends: {
                    hasSome: [ctx.session.user.id],
                  },
                }
              : isFriends === false
              ? {
                  NOT: {
                    friends: {
                      hasSome: [ctx.session.user.id],
                    },
                  },
                }
              : {},
            search
              ? {
                  OR: [
                    {
                      name: {
                        contains: search,
                        mode: "insensitive",
                      },
                    },
                    {
                      username: {
                        contains: search,
                        mode: "insensitive",
                      },
                    },
                  ],
                }
              : {},
          ],
        },
        select: {
          id: true,
          name: true,
          username: true,
        },
      });

      const data: {
        id: string;
        name: string | null;
        username: string | null;
      }[] = [];

      return data;
    }),
  getUserInfo: protectedProcedure
    .input(
      z.object({
        userid: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const data = await ctx.db.user.findFirst({
        where: {
          id: input.userid,
        },
        // select: {
        //   id: true,
        //   name: true,
        //   image: true,
        //   friends: true,
        // },
      });

      if (!data)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Invalid user session",
        });

      let friend = false;

      if (data.friends.find((item) => item === ctx.session.user.id)) {
        friend = true;
      }

      return {
        data,
        friend,
      };
    }),
  sendFriendRequest: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        recipientName: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const notification = await ctx.db.notification.findFirst({
        where: {
          AND: [
            {
              sentTo: input.id,
            },
            {
              from: ctx.session.user.id,
            },
            {
              responded: false,
            },
          ],
        },
      });

      if (notification) return { message: true };

      const user = await ctx.db.user.findFirst({
        where: {
          id: input.id,
        },
      });

      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Internal Server Error",
        });

      const createdNotification = await ctx.db.notification.create({
        data: {
          userId: input.id,
          sentTo: input.id,
          from: ctx.session.user.id,
          image: ctx.session.user.image ? ctx.session.user.image : "",
          senderName: ctx.session.user.name ? ctx.session.user.name : "No name",
          message: "has sent you a friend request.",
          timeSent: new Date(),
        },
      });

      if (!createdNotification)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to send message",
        });

      return { message: "Friend request sent" };
    }),
  acceptRequest: protectedProcedure //needs to be changed 1. use a notification feature if accept or decline friend request
    .input(
      z.object({
        notificationID: z.string(),
        userID: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      // add the user's id to your friendlist
      const updateProfile = await ctx.db.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          friends: {
            push: input.userID,
          },
        },
      });

      //add the your id to the user's friendlist
      const updateUser = await ctx.db.user.update({
        where: {
          id: input.userID,
        },
        data: {
          friends: {
            push: ctx.session.user.id,
          },
        },
      });

      const updateNotification = await ctx.db.notification.update({
        where: {
          id: input.notificationID,
        },
        data: {
          responded: true,
        },
      });

      if (!updateProfile || !updateUser || !updateNotification)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal server error, please try again",
        });

      return { message: "Congratulations! You two now are friends." };
    }),
  removeFriend: protectedProcedure
    .input(
      z.object({
        userid: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      //get user's profile
      const user = await ctx.db.user.findFirst({
        where: {
          id: input.userid,
        },
      });

      //get owner's profile
      const owner = await ctx.db.user.findFirst({
        where: {
          id: ctx.session.user.id,
        },
      });

      //check if both exists
      if (!user || !owner)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Session error, Internal Server Error",
        });

      //remove owner's id from user's friendlist
      const updatedUser = await ctx.db.user.update({
        where: {
          id: input.userid,
        },
        data: {
          friends: {
            set: user.friends.filter(
              (friend) => friend !== ctx.session.user.id,
            ),
          },
        },
      });

      //remove user's id from owner's friendlist
      const updatedOwner = await ctx.db.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          friends: {
            set: owner.friends.filter((friend) => friend !== input.userid),
          },
        },
      });

      //check if both updated
      if (!updatedUser || !updatedOwner)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });

      return { message: "Friend was removed." };
    }),
});

export default userRouter;
