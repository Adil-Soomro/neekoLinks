"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      redirect("/login");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-2 sticky top-0 z-20 text-black shadow-md w-full">
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-3xl font-poppins">
          <Link href="/">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
              NeekoLinks
            </span>
          </Link>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          {[
            { href: "/", label: "Home" },
            { href: "/shorten", label: "Shorten" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-blue-800"
                  : "text-gray-600 hover:text-gray-900"
              } `}
            >
              <span className="text-lg transition-all duration-300">
                {item.label}
              </span>
            </Link>
          ))}
          {/* <Link
            href="/dashboard"
            className={`py-2 px-3 rounded-xl ${
              pathname === "/dashboard"
                ? "text-blue-800"
                : "text-gray-800 hover:text-black"
            }`}
          >
            <span className="text-lg transition-all duration-300">
              Dashboard
            </span>
          </Link> */}
          {LoggedIn ? (
            <Link
              href={"/dashboard"}
              className={`block py-2 px-4 font-medium ${
                pathname === "/dashboard"
                  ? "text-blue-800"
                  : "text-gray-800 hover:bg-black/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          ) : (
            <button
              onClick={() => {
                redirect("/login");
              }}
              className={`block py-2 px-4 bg-gray-800 text-white hover:bg-gray-950 rounded-lg text-start font-medium`}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button with Animation */}

        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none transition-all duration-300"
        >
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile NavLinks */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white overflow-hidden"
      >
        {[
          { href: "/", label: "Home" },
          { href: "/shorten", label: "Shorten" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`block py-2 px-4 hover:bg-gray-300 font-medium ${
              pathname === item.href
                ? "text-blue-800"
                : "text-gray-800 hover:bg-black/5"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        {LoggedIn ? (
          <Link
            href={"/dashboard"}
            className={`block py-2 px-4 hover:bg-gray-300 font-medium ${
              pathname === "/dashboard"
                ? "text-blue-800"
                : "text-gray-800 hover:bg-black/5"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
        ) : (
          <button
            onClick={() => {
              setIsMenuOpen(false);
              redirect("/login");
            }}
            className={`block py-2 px-4 w-full text-start hover:bg-gray-300 font-medium ${
              pathname === "/login"
                ? "text-blue-800"
                : "text-gray-800 hover:bg-black/5"
            }`}
          >
            Login
          </button>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
