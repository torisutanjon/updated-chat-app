import { useEffect, useRef } from "react";
import type { ISocketMessage } from "@/utils/interfaces";
const ScrollIntoDiv = ({ messages }: { messages: ISocketMessage[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return <div className="relative h-1" ref={ref}></div>;
};

export default ScrollIntoDiv;
