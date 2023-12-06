import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import {
  ThemeContextProvider,
  RoomContextProvider,
  LoadingContextProvider,
} from "./context";
import Head from "next/head";
import { api } from "@/utils/api";
import { getServerAuthSession } from "@/server/auth";
import type { GetServerSideProps } from "next";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Chat App by Tristan John Girao</title>
      </Head>
      <ThemeContextProvider>
        <LoadingContextProvider>
          <RoomContextProvider>
            <Component {...pageProps} />
          </RoomContextProvider>
        </LoadingContextProvider>
      </ThemeContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (!session)
    return {
      redirect: {
        destination: "/",
      },
      props: { session },
    };
  return {
    props: { session },
  };
};
