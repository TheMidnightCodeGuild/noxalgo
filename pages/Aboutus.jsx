import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutbanner1.jpg"
            alt="Banner background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl px-4">
            <div className="text-left mx-20">
              <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight text-left">
                About Us
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                We are a team of passionate individuals who are dedicated to
                creating innovative solutions that drive growth and
                profitability for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision Values Section */}
      <section className="py-36 pt-16  bg-black relative ">
        <div className="lg:max-w-[1300px] mx-auto px-4 ">
          <div className="w-[150px] h-[3px] bg-[#fffff0] mb-5"></div>
          <h2 className="text-5xl uppercase font-semibold text-left mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Vision Card */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#111] border border-[#32456C]/30 rounded-xl px-8 py-12 relative mt-24 hover:border-[#fffff0] transition-all duration-300 group">
              <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/about1.png"
                  alt="Vision Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-center mb-6 text-white mt-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Vision
              </h3>
              <p className="text-gray-300 text-justify leading-relaxed tracking-tight">
                To become a global leader in software development and digital
                transformation, creating innovative solutions that empower
                businesses to reach their full potential. We strive to be at the
                forefront of technological advancement, fostering a culture of
                continuous innovation and excellence in everything we do.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#111] border border-[#32456C]/30 rounded-xl px-8 py-12 relative mt-24 hover:border-[#fffff0] transition-all duration-300 group">
              <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/about2.png"
                  alt="Mission Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-center mb-6 text-white mt-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mission
              </h3>
              <p className="text-gray-300 text-justify leading-relaxed tracking-tight">
                To deliver innovative and scalable software solutions that drive
                growth and profitability for our clients. We are committed to
                understanding our clients&apos; unique needs and delivering
                tailored solutions that exceed expectations. Through continuous
                innovation, we aim to be the trusted technology partner.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#111] border border-[#32456C]/30 rounded-xl px-8 py-12 relative mt-24 hover:border-[#fffff0] transition-all duration-300 group">
              <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/about3.png"
                  alt="Values Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-center mb-6 text-white mt-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Values
              </h3>
              <p className="text-gray-300 text-justify leading-relaxed tracking-tight">
                At Noxalgo, we are driven by innovation and creativity in
                everything we do. Our client-centric approach ensures we deliver
                solutions that truly matter. We uphold integrity and
                transparency as our core principles, while constantly striving
                for excellence through continuous learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pb-24 bg-black relative">
        <div className="lg:max-w-[1300px] mx-auto px-4">
          <div className="w-[150px] h-[3px] bg-[#fffff0] mb-5"></div>
          <h2 className="text-5xl uppercase font-semibold text-left bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Starting as a group of passionate freelancers across different
                cities, we united with a shared vision to create something
                extraordinary. Through our experience working with major
                startups and leading companies, NOXALGO LLP was born.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Today, we&apos;re a unified team focused on helping businesses grow
                and maximize their potential through innovative digital
                solutions. Our journey of transformation continues as we strive
                to set new standards in software development and digital
                excellence.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Our Story Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;
