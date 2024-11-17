import React from "react";
import { motion } from "framer-motion";

const Banner4 = () => {
  return (
    <div className="relative w-screen h-[20vh] bg-[#f9f5f0] flex items-center justify-center ">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-center text-[#712727]">
        We Uphold
      </motion.h1>
    </div>
  );
};

export default Banner4;
