import { PageContainer, IsAuth } from "./components";
import Head from "next/head";
import { SearchContextProvider } from "./context";
import { useRouter } from "next/router";
import Image from "next/image";
import { arrowLeft } from "./assets";
import { Search, FetchData } from "./components/Chats";
const SearchChat = () => {
  const router = useRouter();

  return (
    <SearchContextProvider>
      <PageContainer>
        <Head>
          <title>Search</title>
        </Head>
        <div className="relative flex h-full w-full flex-col items-center justify-start bg-white dark:bg-semiBlack">
          <div className="relative mt-6 flex h-10 w-5/6 flex-row items-center justify-center">
            <button
              className="relative flex h-6 w-6 items-center justify-center"
              onClick={() => void router.push("/landing")}
            >
              <Image src={arrowLeft} alt="" className="relative h-3/4 w-3/4" />
            </button>
            <Search />
          </div>
          <FetchData />
        </div>
      </PageContainer>
    </SearchContextProvider>
  );
};

export default IsAuth(SearchChat);
