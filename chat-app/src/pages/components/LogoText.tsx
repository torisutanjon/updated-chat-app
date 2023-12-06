import Link from "next/link";

const LogoText = ({ textSize }: { textSize: string }) => {
  return (
    <Link href="/">
      <div
        className={`relative flex w-full flex-row items-center justify-center font-bold ${textSize}`}
      >
        <p className="text-[#A241CF]">Chat</p>
        <p className="text-semiOrange">App</p>
      </div>
    </Link>
  );
};

export default LogoText;
