import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const useSearchContext = () => {
  const { search, setSearch } = useContext(SearchContext);
  return { search, setSearch };
};

export default useSearchContext;
