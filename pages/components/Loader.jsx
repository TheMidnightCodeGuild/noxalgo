"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Guten tag",
  "Hallo",
  "नमस्ते",
  "Welcome to NoxAlgo",
];

export const opacity = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: {
      duration: 1.2,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.2,
    },
  },
};

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1200 : 200
    );
    return () => clearTimeout(timer);
  }, [index]);

  const initialPath = `M0 0 
    L${dimension.width} 0 
    L${dimension.width} ${dimension.height} 
    Q${dimension.width / 2} ${dimension.height + 400} 0 ${dimension.height} 
    L0 0`;

  const targetPath = `M0 0 
    L${dimension.width} 0 
    L${dimension.width} ${dimension.height} 
    Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} 
    L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  if (isComplete) {
    return null;
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      animate={isComplete ? "exit" : "initial"}
      className="fixed inset-0 flex items-center justify-center z-[99] bg-[#141516]">
      {dimension.width > 0 && (
        <>
          <motion.p
            key={words[index]}
            variants={opacity}
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex items-center text-white text-[52px] font-light tracking-wider absolute z-[1]">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="block w-[12px] h-[12px] bg-white rounded-full mr-[15px]"
            />
            {words[index]}
          </motion.p>

          <svg className="absolute top-0 w-full h-[calc(100%+400px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              animate={isComplete ? "exit" : "initial"}
              className="fill-[#141516]"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}