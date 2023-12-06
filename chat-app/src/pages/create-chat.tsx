import { PageContainer, IsAuth } from "./components";
import Head from "next/head";
import Image from "next/image";
import { arrowLeft } from "./assets";
import { useRouter } from "next/router";
import { SearchContextProvider } from "./context";
import { Search, FetchData } from "./components/Chats";
const CreateChat = () => {
  const router = useRouter();

  return (
    <SearchContextProvider>
      <PageContainer>
        <Head>
          <title>Create Chat</title>
        </Head>
        <div className="relative flex h-full w-full flex-col items-center justify-start bg-white transition-all dark:bg-semiBlack">
          <div className="relative mt-6 flex h-10 w-5/6 flex-row items-center justify-center md:w-2/3">
            <button
              className="relative flex h-6 w-6 items-center justify-center"
              onClick={() => router.back()}
            >
              <Image src={arrowLeft} alt="" className="relative h-3/4 w-3/4" />
            </button>
            <Search />
          </div>
          <div className="relative h-4/5 w-full overflow-auto py-4">
            <FetchData />
          </div>
        </div>
      </PageContainer>
    </SearchContextProvider>
  );
};

export default IsAuth(CreateChat);
