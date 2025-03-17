"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const dinFont = localFont({
  src: "../../fonts/DIN-Light.ttf",
});

const AnnouncementBar = () => {
  return (
    <div className={`w-full bg-black py-2 ${dinFont.className} antialiased`}>
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm tracking-tight text-white ">
          FREE SHIPPING ON ORDERS OVER $200
        </span>
      </div>
    </div>
  );
};

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [prevScollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScollY;

      if (scrolledUp) {
        setIsOpen(true);
      } else if (currentScrollY > 100) {
        setIsOpen(false);
      }
      setPrevScrollY(currentScrollY);
    };

    setPrevScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScollY]);

  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`w-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <AnnouncementBar />

        {/* Navigation Bar */}
        <div
          //   style={{ backgroundColor: "#C14038" }}
          className="w-full flex justify-between items-center py-3 sm:py-4 border-b border-gray-100"
        >
          <div className="flex justify-between items-center container mx-auto px-8">
            <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
              {/* Hamburger Menu */}
              <button className="text-gray-700 hover:text-gray-900 md:hidden">
                {/* SVG Hamburger */}
              </button>
              {/* Nav items */}
              <nav className="bg-neue-red hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
                <Link href="#">Shop</Link>
                <Link href="#">New Arrival</Link>
                <Link href="#">Sale</Link>
              </nav>
            </div>
            <Link href="#">link</Link>

            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
