import { SearchResult } from "../index";
import { useSession } from "next-auth/react";
import type { IChatDataListProps } from "@/utils/interfaces";

const DataList = ({ data }: IChatDataListProps) => {
  const { data: session } = useSession();
  return data.map((data, key) => {
    return (
      session &&
      data.id !== session.user.id &&
      ("roomType" in data ? (
        data.roomType !== "peer" && ( //if data has roomType means it is a room then display only the rooms that is not a "peer"
          <SearchResult session={session} data={{ data }} key={key} />
        )
      ) : (
        //if data has no roomType field means that it is a user
        <SearchResult session={session} data={{ data }} key={key} />
      ))
    );
  });
};

export default DataList;
