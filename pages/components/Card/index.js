"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Always call hooks
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(
    progress || scrollYProgress, // fallback to scrollYProgress if progress is undefined
    range || [0, 1], // fallback to default range if not provided
    [1, targetScale || 1] // fallback to 1 if targetScale is not provided
  );

  // Use the values only after mounting
  const currentImageScale = isMounted ? imageScale : 1;
  const currentScale = isMounted ? scale : 1;

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="flex flex-col relative -top-1/4 h-[300px] sm:h-[400px] md:h-[500px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[1000px] rounded-[25px] p-4 sm:p-6 md:p-[50px] origin-top"
        style={{
          backgroundColor: color,
          scale: currentScale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}>
        <h2 className="text-center m-0 text-lg sm:text-2xl md:text-[28px]">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row h-full mt-4 sm:mt-6 md:mt-[50px] gap-4 sm:gap-6 md:gap-[50px]">
          <div className="w-full md:w-[40%] relative md:top-[10%]">
            <p className="text-sm sm:text-base first-letter:text-xl sm:first-letter:text-2xl md:first-letter:text-[28px] first-letter:font-['Title']">
              {description}
            </p>
            <span className="flex items-center gap-[5px] mt-2 md:mt-0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs underline cursor-pointer">
                See more
              </a>
              <svg
                width="18"
                height="10"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 sm:w-[22px]">
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[80%] h-[200px] md:h-full rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: currentImageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt={title || "Project image"}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
