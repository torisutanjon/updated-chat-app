import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { createTransport } from "nodemailer";
import { env } from "@/env.mjs";
import { sign } from "jsonwebtoken";

const accountRouter = createTRPCRouter({
  getUserInfo: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        name: true,
        username: true,
        email: true,
        emailVerified: true,
      },
    });

    if (!user)
      throw new TRPCError({ code: "NOT_FOUND", message: "No user found" });

    return user;
  }),
  updateUserInfo: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        username: z.string(),
        email: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const updateUser = await ctx.db.user.update({
        where: {
          email: input.email,
        },
        data: {
          name: input.name,
          username: input.username,
          email: input.email,
        },
      });

      if (!updateUser)
        throw new TRPCError({ code: "NOT_FOUND", message: "No User Found!" });

      return { message: "User has been updated!" };
    }),
  isEmailVerified: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        email: ctx.session.user.email,
      },
      select: {
        emailVerified: true,
      },
    });
    if (!user)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Invalid Session",
      });

    return user;
  }),
  sendVerificationEmail: protectedProcedure.mutation(async ({ ctx }) => {
    //get user from session
    const user = ctx.session.user;

    if (!user)
      throw new TRPCError({ code: "NOT_FOUND", message: "Invalid Session" });

    if (!user.email || !user.id)
      throw new TRPCError({ code: "NOT_FOUND", message: "Invalid Session" });

    //initialize transporter
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: env.GOOGLE_APP_EMAIL,
        pass: env.GOOGLE_APP_PASSWORD,
      },
    });

    //create a verification token
    const verification_token = sign(
      {
        name: user.id,
        email: user.email,
      },
      env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    const url = `${env.NEXTAUTH_URL}/verify-email/${verification_token}`;

    let hasError = false;
    try {
      //send the verification email
      await transporter.sendMail({
        to: user.email,
        subject: "Verify Email",
        html: `Click <a href = "${url}" here </a> to verify you email.`,
      });
      hasError = false;
    } catch (error) {
      hasError = true;
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "INTERNAL SERVER ERROR",
      });
    }

    if (hasError)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal server error",
      });

    //save the verification token to the database
    const updatedUser = await ctx.db.user.update({
      where: {
        email: user.email,
      },
      data: {
        verificationToken: verification_token,
      },
    });

    if (!updatedUser)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "INTERNAL SERVER ERROR",
      });

    return { message: `Verification email was sent to: ${user.email}` };
  }),
  verifyEmail: protectedProcedure
    .input(
      z.object({
        token: z.union([z.string(), z.array(z.string())]),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      //check if token exists
      if (!input.token)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Unable to fetch token",
        });

      let stringToken = "";

      //check if input.token is an array
      if (Array.isArray(input.token)) {
        //if array[0] did not exists
        if (!input.token[0])
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Unable to fetch token",
          });
        stringToken = input.token[0];
      } else {
        stringToken = input.token;
      }

      //get user verification from database
      const user = await ctx.db.user.findFirst({
        where: {
          email: ctx.session.user.email,
        },
        select: {
          verificationToken: true,
        },
      });

      //if no user
      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Internal Server Error",
        });

      console.log("email: ", ctx.session.user.email);
      console.log(`stringToken: `, stringToken);
      console.log(`user.verificationToken: `, user.verificationToken);

      //check if token from email === token from database
      if (stringToken === user.verificationToken) {
        const updatedUser = await ctx.db.user.update({
          where: {
            id: ctx.session.user.id,
          },
          data: {
            verificationToken: "",
            emailVerified: new Date(Date.now()),
          },
        });

        // if no database has been updated
        if (!updatedUser)
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "INTERNAL SERVER ERROR",
          });

        return { message: "Email verified" };
      } else {
        //if token from email !== token from database
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Invalid Token Found",
        });
      }
    }),
});

export default accountRouter;
