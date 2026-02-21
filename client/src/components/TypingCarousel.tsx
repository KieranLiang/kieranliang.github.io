import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingCarouselProps {
  prefix: string;
  words: string[];
  icon: React.ReactNode;
}

export default function TypingCarousel({ prefix, words, icon }: TypingCarouselProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex];
  const typingSpeed = 80; // 打字速度（毫秒）
  const deletingSpeed = 40; // 删除速度（毫秒）
  const pauseTime = 2000; // 停留时间（毫秒）

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // 打字阶段
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // 打字完成，等待后删除
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // 删除阶段
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // 删除完成，切换到下一个单词
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWord, words]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.7 }}
      className="seal-stamp flex items-center gap-2 inline-flex"
    >
      {icon}
      <span className="font-light">
        {prefix}{" "}
        <span className="font-medium">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="ml-0.5"
          >
            |
          </motion.span>
        </span>
      </span>
    </motion.span>
  );
}
