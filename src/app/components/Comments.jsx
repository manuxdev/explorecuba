"use client";
import Image from "next/image";
import React, { useState } from "react";

const comments = [
  {
    name: "Jennifer McMichael",
    photo: "",
    comment:
      "I just want to let you know comments about the tour. It was amazing and both the driver and guide were fantastic. I learned a lot about Cuban history from them. Thank you, explore Cuba, I will definitely contact you upon my return.",
  },
  {
    name: "Peter Ki",
    photo: "",
    comment:
      "Hi. Wir hatten bisher einen Flughafen Transfer mit Explore Cuba gebucht. Yossiel hat uns pünktlich abgeholt und zu unserem Hotel gefahren. Schon da freut man sich in einen wunderbar gepflegten Oldtimer einzusteigen. Heute hatten wir eine Tour in  das schöne Havanna Laura, die sehr gut deutsch spricht hat uns alles gezeigt was sehenswert war. Gegessen haben wir sehr gut in einem typisch kubanischen Restaurant und der Besuch in einer kubanischen Cocktailbar hat die Tour abgerundet. Nach dem da auch Hemingway war, war der Besuch der Bar schon fast Pflicht. Allerdings waren die Cocktails auch sehr gut und mit 5 USD auch preislich Top. Wir hatten Spass und der Trip war auch jeden Cent wert. Gerne wieder",
  },
  {
    name: "Kathy Lorel",
    photo: "",
    comment:
      "Merci Explore Cuba in Classic Cars pour cette magnifique journée je vous recommande vivement. Renseignez-vous sur le chauffeur Yosiel et le guide Orelvis si vous voyagez à La Havane, ils sont charmants, très professionnels et amusants 👍🏻",
  },
];

const Comments = () => {
  const [isExpanded, setIsExpanded] = useState(comments.map(() => false));
  return (
    <section className=" h-auto md:pr-16 pr-0 mb-20">
      <div className="md:mt-0 mt-20">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-3xl text-paleta-blue-900">
            Our customers reviews
          </h2>
          <p className="mt-3">Here are some reviews from our customers</p>
          <div className="flex sm:flex-row flex-col items-center justify-center md:gap-10 gap-5 w-[90%] mt-12">
            {comments.map((com, index) => (
              <div
                key={index}
                className="  flex flex-col w-72 px-4 py-3 gap-2 rounded-xl mt-5 border-b-2 border-r-2 border-[#012e4750]"
              >
                <div className="w-full text-end text-4xl">❕❕</div>
                <div className="flex">
                  <div className="h-14 w-14 bg-gradient-to-br from-paleta-blue-900 via-paleta-blue-900 to-paleta-blue-500 rounded-full"></div>
                  <div className="text-start ml-2">
                    {" "}
                    <h3 className="font-bold text-lg">{com.name}</h3>
                    <h3 className="">
                      ⭐⭐⭐⭐⭐ <strong>5.0</strong>
                    </h3>
                  </div>
                </div>
                <p className="text-start w-full">
                  {isExpanded[index]
                    ? com.comment
                    : com.comment.substring(0, 180) + "..."}
                </p>

                <button
                  onClick={() => {
                    const newIsExpanded = [...isExpanded];
                    newIsExpanded[index] = !newIsExpanded[index];
                    setIsExpanded(newIsExpanded);
                  }}
                  className="flex items-center justify-center"
                >
                  {isExpanded[index] ? (
                    <Image
                      alt="arrow"
                      width={20}
                      height={10}
                      src="/icons/arrow-u.svg"
                    />
                  ) : (
                    <Image
                      alt="arrow"
                      width={20}
                      height={10}
                      src="/icons/arrow-d.svg"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
