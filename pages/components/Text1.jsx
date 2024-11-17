import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

export default function Text1() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="min-h-[80vh] sm:h-screen relative mt-10 overflow-x-hidden">
      <motion.div
        className="w-full h-full flex items-center justify-center text-black text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-relaxed xs:leading-relaxed sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[66px] cursor-default absolute bg-[#6a3c3c]"
        style={{
          maskImage: "url('/assets/mask.svg')",
          maskRepeat: "no-repeat",
          maskSize: "40px",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
        <div
          className="w-screen p-4 sm:p-6 md:p-8 lg:p-10"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          <p className="mb-4 xs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-0">
            You have the right to perform your duty,
          </p>
          <p className="ml-2 xs:ml-4 sm:ml-8 md:ml-16 lg:ml-28 px-2 sm:px-0">
            but never to the fruits of action.
          </p>
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] leading-relaxed xs:leading-relaxed sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[66px] cursor-default">
        <div className="w-screen p-4 sm:p-6 md:p-8 lg:p-10">
          <p className="mb-4 xs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-0">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
          </p>
          <p className="ml-2 xs:ml-4 sm:ml-8 md:ml-16 lg:ml-28 px-2 sm:px-0">
            मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥
          </p>
        </div>
      </div>
    </main>
  );
}
