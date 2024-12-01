import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isAtTop = currentScrollPos < 10;

      if (Math.abs(currentScrollPos - prevScrollPos) > 5) {
        setVisible(!isScrollingDown || isAtTop);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (showDropdown) {
      if (dropdownRef.current) {
        dropdownRef.current.style.display = "block";
        gsap.fromTo(
          dropdownRef.current,
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          }
        );
      }
    } else {
      if (dropdownRef.current) {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            if (dropdownRef.current) {
              dropdownRef.current.style.display = "none";
            }
          },
        });
      }
    }
  }, [showDropdown]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        gsap.fromTo(
          mobileMenuRef.current,
          {
            opacity: 0,
            height: 0,
            transformOrigin: "top",
          },
          {
            opacity: 1,
            height: "100vh",
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        document.body.style.overflow = "unset";
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const toggleMobileServices = () => {
    setShowMobileServices(!showMobileServices);
  };

  return (
    <nav
      className={`fixed w-full md:w-[75%] left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out bg-[#101314]/80 backdrop-blur-sm md:rounded-full shadow-lg mt-0 md:mt-3 border border-[#36454F] ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-14 ">
          {/* Logo section */}
          <div className="flex items-center pl-20 ">
            <Link href="/">
              <Image
                src="/assets/logo/logo.png"
                alt="Logo"
                className="h-24 w-24  object-contain"
                width={80}
                height={80}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <div
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] whitespace-nowrap cursor-pointer hover:text-red-200">
                  Our Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-6 mt-5 inset-x-0 bg-[#101314]/90 backdrop-blur-sm border border-[#36454F] -mx-56 rounded-xl shadow-lg z-50 w-[90vw] sm:w-[85vw] lg:w-[80vw] max-w-4xl">
                    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                      <div className="mb-8">
                        <h3 className="text-lg sm:text-base font-semibold mb-4 text-gray-100">
                          Our Services
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <Link href="/services/Web" className="group">
                            <div className="p-4 rounded-lg hover:bg-[#36454F]/30 transition-all duration-300">
                              <h4 className="text-gray-100 font-medium mb-2">
                                Web Development
                              </h4>
                              <p className="text-sm text-gray-400">
                                Custom web applications and responsive websites
                              </p>
                            </div>
                          </Link>
                          <Link href="/services/Ecommerce" className="group">
                            <div className="p-4 rounded-lg hover:bg-[#36454F]/30 transition-all duration-300">
                              <h4 className="text-gray-100 font-medium mb-2">
                                Ecommerce Development
                              </h4>
                              <p className="text-sm text-gray-400">
                                Scalable online stores and marketplaces
                              </p>
                            </div>
                          </Link>
                          <Link href="/services/Ai" className="group">
                            <div className="p-4 rounded-lg hover:bg-[#36454F]/30 transition-all duration-300">
                              <h4 className="text-gray-100 font-medium mb-2">
                                AI & Automation
                              </h4>
                              <p className="text-sm text-gray-400">
                                AI, ML and emerging tech integration
                              </p>
                            </div>
                          </Link>
                          <Link href="/services/Ui" className="group">
                            <div className="p-4 rounded-lg hover:bg-[#36454F]/30 transition-all duration-300">
                              <h4 className="text-gray-100 font-medium mb-2">
                                UI/UX Design
                              </h4>
                              <p className="text-sm text-gray-400">
                                User-centric design solutions
                              </p>
                            </div>
                          </Link>
                          <Link href="/services/Nocode" className="group">
                            <div className="p-4 rounded-lg hover:bg-[#36454F]/30 transition-all duration-300">
                              <h4 className="text-gray-100 font-medium mb-2">
                                No Code Development & Integration
                              </h4>
                              <p className="text-sm text-gray-400">
                                No-code solutions for rapid development
                              </p>
                            </div>
                          </Link>
                          <Link href="/services/Web3" className="group">
                            <div className="p-4 rounded-lg hover:bg-[#36454F]/30 transition-all duration-300">
                              <h4 className="text-gray-100 font-medium mb-2">
                                Web 3.0 & Blockchain Development
                              </h4>
                              <p className="text-sm text-gray-400">
                                Web 3.0 and blockchain solutions
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              <Link
                href="/About"
                className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full">
                About Us
              </Link>
              <Link
                href="/Careers"
                className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full">
                Careers
              </Link>
              <Link
                href="/Insights"
                className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full">
                Insights
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center pr-8">
            <Link
              href="/Contact"
              className="bg-[#FFFFF0] text-black text-[14px] xl:text-[14px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-[#000000] hover:text-white">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center pr-2">
            <button
              className="outline-none mobile-menu-button p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed w-full left-0 bg-[#101314] z-50 overflow-y-auto"
          style={{ height: 0, opacity: 0, top: "64px" }}>
          <div className="px-4 pt-2 pb-3 space-y-2">
            {/* Services Dropdown in Mobile */}
            <div className="relative">
              <button
                onClick={toggleMobileServices}
                className="w-full flex justify-between items-center py-2 text-gray-100 hover:text-red-200">
                Our Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    showMobileServices ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`pl-4 space-y-2 transition-all duration-300 ${
                  showMobileServices ? "block" : "hidden"
                }`}>
                <Link
                  href="/services/Web"
                  className="block py-2 text-gray-100 hover:text-red-200">
                  Web Development
                </Link>
                <Link
                  href="/services/Ecommerce"
                  className="block py-2 text-gray-100 hover:text-red-200">
                  Ecommerce Development
                </Link>
                <Link
                  href="/services/Ai"
                  className="block py-2 text-gray-100 hover:text-red-200">
                  AI & Automation
                </Link>
                <Link
                  href="/services/Ui"
                  className="block py-2 text-gray-100 hover:text-red-200">
                  UI/UX Design
                </Link>
                <Link
                  href="/services/Nocode"
                  className="block py-2 text-gray-100 hover:text-red-200">
                  No Code Development
                </Link>
                <Link
                  href="/services/Web3"
                  className="block py-2 text-gray-100 hover:text-red-200">
                  Web 3.0 & Blockchain
                </Link>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="/About"
              className="block py-2 text-gray-100 hover:text-red-200">
              About Us
            </Link>
            <Link
              href="/Insights"
              className="block py-2 text-gray-100 hover:text-red-200">
              Insights
            </Link>
            <Link
              href="/Careers"
              className="block py-2 text-gray-100 hover:text-red-200">
              Careers
            </Link>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link
                href="/Contact"
                className="block w-full text-center bg-[#FFFFF0] text-black rounded-full px-4 py-2 hover:bg-black hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
