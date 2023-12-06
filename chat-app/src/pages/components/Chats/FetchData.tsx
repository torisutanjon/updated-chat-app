import { useDebounce } from "@/utils/useDebounce";
import { api } from "@/utils/api";
import { useSearchContext } from "@/pages/hooks";
import { DataList } from "./index";
import { RoomPasswrodContextProvider } from "@/pages/context";

const FetchData = () => {
  const { search } = useSearchContext();
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading } = api.room.search.useQuery({
    search: debouncedSearch,
  });

  return (
    <div className="relative h-4/5 w-full overflow-auto py-4">
      {isLoading ? (
        <p className="mt-8 w-full text-center text-semiBlack/75">loading ...</p>
      ) : data === undefined ? (
        <></>
      ) : (
        <RoomPasswrodContextProvider>
          <DataList data={data} />
        </RoomPasswrodContextProvider>
      )}
    </div>
  );
};

export default FetchData;
