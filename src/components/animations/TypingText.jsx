import { useEffect, useState } from "react";

export default function TypingText({ children, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(children.slice(0, index + 1));
      index++;

      if (index === children.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <span>{displayedText}</span>;
}
