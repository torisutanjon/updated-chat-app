import { LoadingComponent } from "./index";
import { useLoadingContext } from "@/pages/hooks";
const DisplayLoading = () => {
  const { isLoadingState } = useLoadingContext();
  return isLoadingState && <LoadingComponent />;
};

export default DisplayLoading;
