import React from "react";

import { cars } from "../data/cars";
import Image from "next/image";

const SwiperE = () => {
  return (
    <div className=" carousel carousel-vertical w-full sm:h-[500px] h-72">
      {cars.map((car, index) => (
        <div
          key={index}
          className="carousel-item h-full flex items-center justify-center"
        >
          <Image
            src={car.src}
            alt="car"
            width={800}
            height={200}
            className="items-center "
          />
        </div>
      ))}
    </div>
  );
};

export default SwiperE;
