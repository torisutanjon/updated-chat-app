import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

const useLoadingContext = () => {
  const { isLoadingState, setIsLoadingState } = useContext(LoadingContext);
  return { isLoadingState, setIsLoadingState };
};

export default useLoadingContext;
