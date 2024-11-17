import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t border-white/[0.1] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14 bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-xs sm:text-sm text-neutral-500 flex flex-col sm:flex-row justify-between items-start md:px-4 lg:px-8">
        <div className="w-full sm:w-auto mb-8 sm:mb-0">
          <div className="flex justify-center sm:justify-start mb-4">
            <a
              className="font-normal flex space-x-2 items-center text-sm text-black px-2 py-1 relative z-20"
              href="/">
              <Image
                src="/assets/logo/footerlogo.png"
                alt="Noxalgo logo"
                width={60}
                height={60}
                className="object-contain sm:mx-4 md:mx-8 lg:mx-12"
              />
            </a>
          </div>
          <div className="text-center sm:text-left mt-2">
            <p className="text-xs sm:text-sm">
              © copyright Noxalgo 2023 - 2024. All rights reserved.
            </p>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm">
              Transforming Ideas into Digital Reality
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full sm:w-auto mt-8 sm:mt-0">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <p className="text-neutral-300 font-bold text-sm sm:text-base">
              Services
            </p>
            <ul className="space-y-2 sm:space-y-4 text-neutral-300">
              <li>
                <a
                  className="hover:text-neutral-100 transition-colors text-xs sm:text-sm"
                  href="/web-development">
                  Web Development
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-colors text-xs sm:text-sm"
                  href="/mobile-apps">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4">
            <p className="text-neutral-300 font-bold text-sm sm:text-base">
              Connect
            </p>
            <ul className="space-y-2 sm:space-y-4 text-neutral-300">
              {["Discord", "Twitter", "LinkedIn", "Instagram"].map(
                (platform) => (
                  <li key={platform}>
                    <a
                      className="hover:text-neutral-100 transition-colors text-xs sm:text-sm"
                      href={`https://${platform.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {platform}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4">
            <p className="text-neutral-300 font-bold text-sm sm:text-base">
              Legal
            </p>
            <ul className="space-y-2 sm:space-y-4 text-neutral-300">
              {[
                ["Privacy Policy", "/privacy-policy"],
                ["Terms of Service", "/terms-of-service"],
                ["Cookie Policy", "/cookie-policy"],
              ].map(([text, href]) => (
                <li key={href}>
                  <a
                    className="hover:text-neutral-100 transition-colors text-xs sm:text-sm"
                    href={href}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4">
            <p className="text-neutral-300 font-bold text-sm sm:text-base">
              Company
            </p>
            <ul className="space-y-2 sm:space-y-4 text-neutral-300">
              {[
                ["About Us", "/about"],
                ["Contact", "/contact"],
                ["Careers", "/careers"],
              ].map(([text, href]) => (
                <li key={href}>
                  <a
                    className="hover:text-neutral-100 transition-colors text-xs sm:text-sm"
                    href={href}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 sm:mt-12 md:mt-16 pt-10 sm:pt-16 md:pt-20 text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] xl:text-[13rem] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-800">
        Noxalgo
      </p>
    </div>
  );
};

export default Footer;
