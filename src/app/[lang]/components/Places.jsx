import React from "react";
import { images } from "../data/images";
import { Link } from "../../../navigation";
import { useTranslations } from "next-intl";

const Places = () => {
  const t = useTranslations("Home");
  return (
    <section className="md:h-screen h-auto md:pr-16 pr-0">
      <div className="mt-20">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-2xl text-paleta-blue-900">
            {t("Places.h2")}
          </h2>
          <p>{t("Places.p")}</p>
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
