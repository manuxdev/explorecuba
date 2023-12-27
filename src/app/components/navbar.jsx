"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuOverlay";
import Image from "next/image";
const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Cars",
    path: "/cars",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handlerChange = () => {
    const valor = navbarOpen;
    setNavbarOpen(!valor);
  };

  return (
    <nav className="absolute w-full top-0 lef-0 right-0 z-30 bg-transparent ">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto py-2 px-6">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/logo.png"
            loading="eager"
            width={300}
            height={300}
            className="sm:w-[200px] sm:h-[70px] w-[160px] h-[50px]"
            alt="logo"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={handlerChange}
              className="flex items-center p-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={handlerChange}
              className="flex items-center p-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white "
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row items-center md:space-x-8 mt-0">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.path} title={item.title} />
              </li>
            ))}
            <div className="pl-6 flex-row gap-6 md:flex hidden">
              <Link
                href="https://www.facebook.com/profile.php?id=61552355900498"
                target="_blank"
              >
                <Image
                  src="/icons/face-sky.svg"
                  alt="face"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </Link>
              <Link href="#" target="_blank">
                <Image
                  src="/icons/insta-sky.svg"
                  alt="face"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5353762922"
                target="_blank"
              >
                <Image
                  src="/icons/wht-sky.svg"
                  alt="face"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </Link>
            </div>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
