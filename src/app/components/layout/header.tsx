"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AuthModal from "@/app/components/modals/userAuth";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        // Update the pathname on the client side
        setPathname(window.location.pathname);

        // Handle scroll state
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`text-[#222726] py-5 px-[5%] z-50 fixed top-0 left-0 right-0 transition duration-300 ${
                scrolled ? "bg-black/70" : "bg-transparent"
            }`}
        >
            <title>BSDOC</title>
            {/*eslint-disable-next-line @next/next/no-page-custom-font*/}
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@100;300;400;500;700;900&display=swap"
                rel="stylesheet"
            />

            <nav>
                <ul className="flex flex-row items-center gap-5 justify-end text-sm">
                    <li
                        className={`hover:underline cursor-pointer ${
                            pathname === "/"
                                ? "text-white"
                                : "text-[#2D383D]"
                        } text-md`}
                    >
                        Schedule an Appointment
                    </li>
                    <div
                        onClick={() => setIsLoginOpen(true)}
                        className="py-3 px-8 bg-white rounded-full border border-[#222726] cursor-pointer active:scale-[.95] hover:scale-[.98] transition duration-200"
                    >
                        Sign in
                    </div>
                </ul>
            </nav>

            <AnimatePresence>
                <AuthModal
                    isOpen={isLoginOpen}
                    onClose={() => setIsLoginOpen(false)}
                    initialTab="login"
                />
            </AnimatePresence>
        </header>
    );
};

export default Header;
