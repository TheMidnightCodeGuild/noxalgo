import React from "react";
import Marquee from "react-fast-marquee";
const Banner2 = () => {
  return (
    <>
      <div className="bg-[#FFFFF0] py-4 sm:py-6 md:py-4">
        <div className="max-w-[1300px] mx-auto ">
          <Marquee speed={40}>
            {[
              "At NoxAlgo, we’re more than a software development company—we’re your partner in crafting innovative digital solutions. With a focus on quality, creativity, and adaptability, we transform ideas into impactful realities. Our core values of integrity, collaboration, and excellence drive every line of code we write, helping your business thrive in the digital age.",
            ].map((word, index) => (
              <span
                key={index}
                className="text-lg sm:text-xl md:text-xl font-bold mx-10 text-gray-800">
                ✷ {word}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Banner2;
