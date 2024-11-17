import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

export default function Text1() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="h-[80vh] relative mt-10">
      <motion.div
        className="w-full h-full flex items-center justify-center text-black text-[64px] leading-[66px] cursor-default absolute bg-[#6a3c3c]"
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
          className="w-screen p-10"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          <p className="text-center text-6xl">
            Perform your duties with the welfare of the world in mind.
          </p>
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-[70px] leading-[66px] cursor-default">
        <div className="w-screen flex flex-col items-center justify-center">
          <p className="">लोकसंग्रहमेवापि संपश्यन्कर्तुमर्हसि।</p>{" "}
        </div>
      </div>
    </main>
  );
}
