"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#012e4756]  ">
      <div className=" sm:px-8 px-4 py-4 flex justify-between ">
        <div>
          <Link href="/">
            <strong className="text-paleta-blue-900 sm:text-xl text-lg">
              Explore Cuba in Classic Cars
            </strong>
          </Link>
          <p className="">All rights reserved</p>
        </div>
        <div>
          {" "}
          <div className="flex-row gap-6 flex items-center h-full">
            <Link href="#">
              <Image
                src="/icons/face-sky.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/insta-sky.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/wht-sky.svg"
                alt="Whatsapp"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
