import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 opacity-100 blur-xl transition duration-1000 group-hover:opacity-70"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 opacity-100 transition duration-1000 group-hover:opacity-70"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export default BackgroundGradient;
