import { projects } from "../../utils/data";
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className="relative mt-[10vh] md:mt-[15vh]">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-2 md:mb-4 tracking-tight text-transparent bg-gradient-to-r from-gray-900 to-gray-50 bg-clip-text px-4">
        Our Expertise
      </h1>
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.01;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}