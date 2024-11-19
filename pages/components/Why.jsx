"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Why = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // Stagger the animations
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#101314] w-full min-h-screen pt-10 ">
      <div className="max-w-6xl mx-auto px-4 md:px-5 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="lg:w-1/2 mx-4 md:ml-8 mb-8 lg:mb-0">
            <h2
              ref={(el) => (cardsRef.current[3] = el)}
              className="text-2xl md:text-[2.5rem] font-bold text-white mb-4">
              Why Noxalgo?
            </h2>
            <p className="text-neutral-400 text-lg mb-6 text-justify tracking-tighter">
              We believe in integrity, innovation, constant improvement,
              commitment to customers, teamwork and trust. We provide high-level
              planning and infrastructure consulting through technology
              partnerships. We work on developing your technology implementation
              and management plan.
            </p>
            <Link
              href="/About"
              className="relative inline-flex items-center px-6 sm:px-8 md:px-12 py-2 sm:py-3 overflow-hidden text-sm sm:text-base md:text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-white w-full sm:w-auto justify-center">
              <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 hidden sm:flex items-center justify-start w-8 sm:w-10 h-8 sm:h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative">More About Us</span>
            </Link>
          </div>

          <div className="lg:w-1/2 space-y-3 md:space-y-4 px-4 md:px-0 -mt-2">
            {/* Expert Team Card */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-white/10 p-3 md:p-4 border border-[#1E1656] rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-full md:w-auto flex-shrink-0 sm:ml-0 ml-28">
                  <Image
                    src="/images/expert-team.svg"
                    alt="Expert Team"
                    width={150}
                    height={75}
                    className="w-[150px] h-[95px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 text-center md:text-left">
                    Expert Team
                  </h3>
                  <p className="text-neutral-400 text-sm text-center md:text-left">
                    At Noxalgo, we believe in quality, so we have a more
                    comprehensive, versatile, and skilled team that will go
                    above and beyond to meet the needs of our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Committed to Delivery Card */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-white/10 p-3 md:p-4 border border-[#1E1656] rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-full md:w-auto flex-shrink-0 sm:ml-0 ml-28">
                  <Image
                    src="/images/delivery.svg"
                    alt="Committed to Delivery"
                    width={150}
                    height={75}
                    className="w-[150px] h-[95px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 text-center md:text-left">
                    Committed to Delivery
                  </h3>
                  <p className="text-neutral-400 text-sm text-center md:text-left">
                    Our commitment to timely delivery ensures your projects stay
                    on track. We maintain transparent communication and meet
                    deadlines consistently.
                  </p>
                </div>
              </div>
            </div>

            {/* 24-hour Assistance Card */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="bg-white/10 p-3 md:p-4 border border-[#1E1656] rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-full md:w-auto flex-shrink-0 sm:ml-0 ml-28">
                  <Image
                    src="/images/agile.svg"
                    alt="Agile Development Process"
                    width={150}
                    height={75}
                    className="w-[150px] h-[85px] object-contain text-white"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 text-center md:text-left">
                    Agile Development Process
                  </h3>
                  <p className="text-neutral-400 text-sm text-center md:text-left">
                    Our agile development process allows us to adapt to your
                    changing needs and deliver high-quality solutions quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
