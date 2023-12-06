import { IsAuth, PageContainer } from "../components";
import { FetchChat } from "../components/ChatComponents";

const Chat = () => {
  return (
    <PageContainer>
      <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-semiBlack">
        <div className="relative flex h-full w-full border-semiBlack/25 transition-all dark:border-semiLightWhite/25 sm:m-auto sm:h-5/6 sm:w-11/12 sm:rounded-xl sm:border-2 xl:w-5/6">
          <FetchChat />
        </div>
      </div>
    </PageContainer>
  );
};

export default IsAuth(Chat);
