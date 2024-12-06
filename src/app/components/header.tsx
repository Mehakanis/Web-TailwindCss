"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // State to manage the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="mt-4 w-full border-b-2 border-[#EAE8F3] py-4">
      <div className="flex justify-between items-center mx-4 sm:mx-10">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="logo" height={50} width={50} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex flex-row gap-8 text-base md:text-lg">
            <li>
              <Link href="/">
                <span className="flex items-center">
                  PRODUCTS{" "}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    height={15}
                    width={15}
                    className="ml-2"
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">GALLERY</Link>
            </li>
            <li>
              <Link href="/">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="block md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} // Toggle between hamburger and close icons
              />
            </svg>
          </button>
        </div>

        {/* Buttons for Desktop */}
        <div className="hidden md:flex gap-4">
          <button className="bg-[#F7F7F7] text-black px-4 py-2 text-sm md:text-base">
            LOG IN
          </button>
          <button className="bg-[#42454A] text-white px-4 py-2 rounded-lg text-sm md:text-base">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg text-center bg-[#F9F9F9] py-4 shadow-md rounded-md">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
            <li>
              <button className="bg-[#F7F7F7] text-black px-4 py-2 w-full">
                LOG IN
              </button>
            </li>
            <li>
              <button className="bg-[#42454A] text-white px-4 py-2 w-full rounded-lg">
                SIGN UP
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
