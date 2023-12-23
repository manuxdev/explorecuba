import Image from "next/image";
import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 md:h-screen h-auto">
      <div className="md:col-span-7 col-span-8 place-self-center text-center md:text-left  md:px-0 md:py-20 pt-32">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold lg:tracking-tight xl:tracking-tighter">
          <strong className="bg-paleta-blue-900 text-paleta-blue-500 px-3 rounded-lg">
            DISCOVER
          </strong>{" "}
          NEW PLACES!
        </h1>
        <p className="md:text-lg text-base mt-4 text-slate-600 md:max-w-[80%] max-w-lg">
          ut ut amet amet adipisicing proident velit pariatur dolor nostrud
          ipsum ipsum deserunt.
          {/* <wbr /> Built with Astro.build and TailwindCSS. You can quickly create
          any website with this starter. */}
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Link
            href="#"
            target="_blank"
            className="font-medium flex md:py-3 py-2 px-10 gap-1 items-center justify-center bg-paleta-blue-900 text-paleta-blue-500 hover:bg-paleta-blue-500 hover:text-paleta-blue-900 rounded-lg transition-colors"
            rel="noopener"
          >
            {/* <Icon className="text-white w-5 h-5" name="bx:bxs-cloud-download" />  */}
            Contacts
          </Link>
          <Link
            href="#"
            className="font-medium flex gap-1 md:py-3 py-2 px-10 items-center justify-center bg-paleta-bond-200 hover:bg-paleta-blue-500 border border-paleta-blue-900 rounded-lg transition-colors"
            target="_blank"
          >
            {/* <Icon className="text-black w-4 h-4" name="bx:bxl-github" /> */}
            About us
          </Link>
        </div>
      </div>
      <div
        className="h-full sm:w-[100%] w-[120%] right-0 bg-paleta-blue-900 pb-52 relative z-10 sm:col-span-5 col-span-4 place-self-center mt-[-10px] md:block hidden
 "
      >
        {/* // sm:rounded-none sm:shadow-none
  //        rounded-full
  //        w-[250px]
  //        h-[250px]
  //        shadow-lg
         shadow-[#2c2c2c] */}
        <div
          className="bottom-0 md:-translate-x-40 lg:-translate-x-40 sm:-translate-y-0 absolute md:pb-16 sm:pb-32 lg:block hidden
                 transform -translate-x-0
               -translate-y-12 rounded-full"
        >
          <Image
            src="/images/hero.png"
            alt="Astronaut in the air"
            width={600}
            height={600}
            // loading="eager"
            className="transform rotate-[5deg]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
