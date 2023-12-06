import { useThemeContext } from "@/pages/hooks";

const PageContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-screen flex-col items-start justify-start bg-white ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
