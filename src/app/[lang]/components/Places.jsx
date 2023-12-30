import React from "react";
import { images } from "../data/images";
import Link from "next/link";

const Places = () => {
  return (
    <section className="md:h-screen h-auto md:pr-16 pr-0">
      <div className="mt-20">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-2xl text-paleta-blue-900">
            PLACES NOT TO BE MISSED
          </h2>
          <p>Discover incredibles places in the heart of the country</p>
        </div>
        <div className="md:grid grid-cols-8 md:gap-3 gap-5 grid-rows-10 mt-8 flex flex-col md:flex-row">
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: `${img.position}`,
              }}
              className={`${img.class} relative`}
            >
              <Link
                href="/places"
                className="h-full w-full absolute rounded-xl bg-transparent hover:bg-paleta-blue-900 opacity-50 duration-400 z-10 transition-all"
              ></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;

{
  /* <div
            style={{
              backgroundImage: "url(/images/3.webp)",
              backgroundSize: "cover",
            }}
            className="md:col-span-4 md:h-auto h-52 md:row-span-6 rounded-lg bg-paleta-red-900 w-full md:w-auto"
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/9.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="md:col-span-2 md:h-auto h-52 md:row-span-12 bg-paleta-blue-900 rounded-lg w-full md:w-auto"
          ></div>

          <div
            style={{
              backgroundImage: "url(/images/8.webp)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
            className="md:col-span-2 md:h-auto h-52 md:row-span-6 bg-paleta-blue-500 rounded-lg w-full md:w-auto"
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/2.webp)",
              backgroundSize: "cover",
            }}
            className="md:col-span-2 md:h-auto h-52  md:row-span-6 bg-paleta-red-500 rounded-lg w-full md:w-auto"
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/4.webp)",
              backgroundSize: "cover",
            }}
            className="md:col-span-2 h-52 md:row-span-6 bg-paleta-blue-500 rounded-lg w-full md:w-auto"
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/10.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="md:col-span-2 h-52 md:row-span-6 bg-paleta-red-900 rounded-lg w-full md:w-auto"
          ></div> */
}
