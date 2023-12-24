import Image from "next/image";
import React from "react";

const work = [
  {
    icon: "/icons/gps.svg",
    title: "Search Location",
    desc: "labore duis aliquip in fugiatlabore duis aliquip in fugiatlabore duis aliquip in fugiat",
  },
  {
    icon: "/icons/pay.svg",
    title: "Easy Payment",
    desc: "labore duis aliquip in fugiatlabore duis aliquip in fugiatlabore duis aliquip in fugiat",
  },
  {
    icon: "/icons/trip.svg",
    title: "Make Trip",
    desc: "labore duis aliquip in fugiatlabore duis aliquip in fugiatlabore duis aliquip in fugiat",
  },
];

const Work = () => {
  return (
    <section className=" h-auto md:pr-16 pr-0 mb-20">
      <div className="md:mt-0 mt-20">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-3xl text-paleta-blue-900">
            HOW WE WORK
          </h2>
          <p className="mt-3">
            labore duis aliquip in fugiatlabore duis aliquip in fugiatlabore
            duis aliquip in fugiat
          </p>
          <div className="flex sm:flex-row flex-col items-center sm:gap-24 gap-10 sm:w-[90%] w-[70%] mt-10">
            {work.map((box, index) => (
              <div
                key={index}
                className=" flex flex-col items-center justify-center  gap-3"
              >
                <Image alt={box.title} src={box.icon} width={60} height={60} />
                <h3 className="text-xl font-bold">{box.title}</h3>
                <p>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
