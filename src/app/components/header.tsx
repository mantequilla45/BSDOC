"use client";

import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true); // Change background when scrolled
        } else {
          setScrolled(false); // Reset background when at the top
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <header
        className={`text-[#222726] py-5 px-[5%] z-50 fixed top-0 left-0 right-0 transition duration-300 ${
          scrolled ? "bg-black/70" : "bg-transparent"
        }`}
      >
            <title>BSDOC</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@100;300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
            <nav>
                <ul className="flex flex-row items-center cursor-pointer gap-5 justify-end text-sm">
                    <li className="hover:underline text-white text-md">Schedule an Appointment</li>
                    <div className="py-3 px-8 bg-white rounded-full border border-[#222726] cursor-pointer active:scale-[.95] hover:scale-[.98] transition duration-200">
                        Login
                    </div>
                    <div className="py-3 px-8 bg-white rounded-full border border-[#222726] cursor-pointer active:scale-[.95] hover:scale-[.98] transition duration-200">
                        Signup
                    </div>
                </ul>
            </nav>
        </header>
    );
};


export default Header;