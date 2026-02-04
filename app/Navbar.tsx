'use client';
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "./logo.jpeg";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";
const placeholderProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,         // Added this
  onResizeCapture: undefined,  // Added this
};
export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  // Close the menu automatically if the screen is resized to desktop
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  // Shared Nav List Component
  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {["Home", "Collection", "About Us", "Contact Us"].map((link) => {
        const href = link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s/g, "")}`;
        const isActive = pathname === href;

        return (
          <li key={link}>
            <Link 
              href={href} 
              className="navbar-link"
              style={{ 
                color: isActive ? "var(--brand-gold)" : "white" 
              }}
            >
              {link}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Navbar 
      className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black border-none" 
      {...placeholderProps}
    >
      {/* Desktop Layout: 3 Columns */}
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center text-white">
        
        {/* 1. Left Column: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="cursor-pointer py-1.5">
            <Image 
              src={logo} 
              alt="Logo" 
              width={50} 
              height={50} 
              className="rounded-xl"
            />
          </Link>
        </div>

        {/* 2. Center Column: Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex justify-center">
          {navList}
        </div>

        {/* 3. Right Column: Socials + ThemeToggler + Hamburger */}
        <div className="flex items-center justify-end gap-4">
          {/* Socials (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://www.instagram.com/quickluxurycars" target="_blank">
              <FaInstagram size={22} className="hover:text-pink-500 transition-colors" />
            </a>
            <a href="#">
              <FaFacebook size={22} className="hover:text-blue-600 transition-colors" />
            </a>
          </div>

          {/* Theme Toggler Button */}
          <ThemeToggler />

          {/* Mobile Hamburger Icon */}
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            {...placeholderProps}
          >
            {openNav ? <HiX size={24} /> : <HiMenu size={24} />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Collapsible Menu */}
      <Collapse open={openNav}>
        <div className="container mx-auto pb-4">
          {navList}
          <div className="flex items-center gap-x-4 pt-2 border-t border-gray-800">
            <FaInstagram size={22} color="#FFFFFF" />
            <FaFacebook size={22} color="#FFFFFF" />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}