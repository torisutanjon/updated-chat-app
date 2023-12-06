import { LoadingComponent } from "../index";
import { useLoadingContext } from "@/pages/hooks";
const SubmitLoading = () => {
  const { isLoadingState } = useLoadingContext();
  return isLoadingState && <LoadingComponent />;
};

export default SubmitLoading;
