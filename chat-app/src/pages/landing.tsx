import Head from "next/head";
import { PageContainer, ComposeMessageButton, IsAuth } from "./components";
import {
  AddButton,
  ProfileImage,
  SearchBar,
  FetchRoom,
  Notification,
  AddRoom,
  FetchFriends,
} from "./components/LandingComponents";
import { AddRoomContextProvider } from "./context";

const Landing = () => {
  return (
    <AddRoomContextProvider>
      <PageContainer>
        <Head>
          <title>ChatApp by Tristan John P. Girao</title>
        </Head>
        <div className="relative flex h-full w-full flex-col items-center justify-start bg-white dark:bg-semiBlack">
          <div className="relative flex h-14 w-full flex-row items-center justify-between px-4">
            <AddButton />
            <ProfileImage />
          </div>
          <SearchBar />
          <div className="relative mt-6 flex h-3/4 w-4/5 flex-row items-start justify-start transition-all sm:w-3/4 md:w-1/2">
            <div className="relative flex h-full w-4/5 flex-col items-start justify-start md:w-2/3">
              <p className="relative text-sm font-medium text-semiBlack/50 dark:text-semiLightWhite/75">
                Chats
              </p>
              <div className="relative mt-4 flex h-5/6 w-full items-center justify-center">
                <FetchRoom />
              </div>
            </div>
            <FetchFriends />
          </div>
          <ComposeMessageButton />
          <Notification />
          <AddRoom />
        </div>
      </PageContainer>
    </AddRoomContextProvider>
  );
};

export default IsAuth(Landing);
