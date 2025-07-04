import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 768);

    // Add window resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      setIsDesktopMenuOpen(false);
    } else {
      setIsDesktopMenuOpen(!isDesktopMenuOpen);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Banner - Red Bull style */}
      <div className="w-full bg-[#0C1B32] border-b border-[#1E3A5F] fixed top-0 left-0 z-50">
        <div className="">
          <div className=""></div>
          <div className=" mx-auto px-4 py-1 flex items-center relative !ml-0">
            {/* Menu Icon (desktop and mobile) */}
            <div className="absolute left-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <g fillRule="evenodd">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M12 17.333A1.333 1.333 0 1 1 12 20a1.333 1.333 0 0 1 0-2.667Zm6.667 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm-13.334 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667ZM12 10.667a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666Zm-6.667 0a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666Zm13.334 0a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666ZM12 4a1.333 1.333 0 1 1 0 2.667A1.333 1.333 0 0 1 12 4ZM5.333 4a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm13.334 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Z"></path>
                  </g>
                </svg>
              </Button>
            </div>
            
            <div className="flex items-center justify-center w-full p-1">
              <Link
                href="https://www.redbull.com"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <Image
                  src="/rblogo.svg"
                  alt="Red Bull Logo"
                  width={48}
                  height={18}
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="absolute top-6 left-0 w-full z-40">
        <div className=" mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/rblogotext.svg"
                alt="Red Bull Company Logo"
                width={208}
                height={36}
                className="h-9 "
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center bg-black/40 rounded-full px-5 py-1.5 space-x-6">
            <Link
              href="#"
              className="text-neutral-300 hover:text-white text-sm font-medium border-b-2 border-red-500 pb-1 no-underline"
            >
              Jobs
            </Link>
            <Link
              href="https://jobs.redbull.com/int-en/career-faq"
              className="text-neutral-300 hover:text-white text-sm font-medium hover:border-b-2 hover:border-red-500 pb-1 no-underline"
            >
              FAQs
            </Link>
            <Link
              href="https://jobs.redbull.com/locations"
              className="text-neutral-300 hover:text-white text-sm font-medium hover:border-b-2 hover:border-red-500 pb-1 no-underline"
            >
              Locations
            </Link>
            <Link
              href="https://jobs.redbull.com/talent-communities"
              className="text-neutral-300 hover:text-white text-sm font-medium hover:border-b-2 hover:border-red-500 pb-1 no-underline"
            >
              Talent Communities
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMenu} />
      
      {/* Desktop Menu */}
      <DesktopMenu isOpen={isDesktopMenuOpen} onClose={toggleMenu} />
    </>
  );
}
