"use client";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuOverlay";
import { usePathname } from "next/navigation";
const NavButton = ({ links }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [lastpastname, setLastPastname] = useState();
  const pathname = usePathname();
  const handlerChange = () => {
    const valor = navbarOpen;
    setNavbarOpen(!valor);
  };

  const closeModal = (e) => {
    if (e.target.id === "close") {
      setNavbarOpen(false);
    }
  };
  useEffect(() => {
    setLastPastname(pathname);
    if (lastpastname != pathname) {
      setNavbarOpen(false);
    }
  }, [pathname, lastpastname]);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarOpen) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarOpen]);

  return (
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
      <div>
        {navbarOpen ? (
          <div
            id="close"
            className=" fixed transition-all duration-75 delay-75  inset-0   cursor-pointer flex items-start mt-[18%] mr-[4%] justify-center"
            onClick={closeModal}
          >
            <MenuOverlay links={links} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavButton;
