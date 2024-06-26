import { useTranslations } from "next-intl";

import Image from "next/image";
import { Link } from "../../../navigation";

const Hero = () => {
  const t = useTranslations("Home");

  return (
    <main className="grid grid-cols-1 md:grid-cols-12 md:h-screen h-auto">
      <div className="md:col-span-7 col-span-8 place-self-center text-center md:text-left  md:px-0 md:py-20 pt-32">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold lg:tracking-tight xl:tracking-tighter text-paleta-blue-900">
          <strong className="bg-paleta-blue-900 text-paleta-blue-500 px-3  rounded-lg">
            {t("Hero.h1_strong")}
          </strong>{" "}
          {t("Hero.h1")}
        </h1>
        <p className="md:text-lg text-base mt-4 text-slate-600 md:max-w-[70%] max-w-lg">
          {t("Hero.p")}
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Link
            href="https://api.whatsapp.com/send?phone=5358118657"
            target="_blank"
            className="font-medium flex md:py-3 py-2 px-10 gap-1 items-center justify-center bg-paleta-blue-900 text-paleta-blue-500 hover:bg-paleta-blue-500 hover:text-paleta-blue-900 rounded-lg transition-colors"
          >
            {t("Hero.link_book")}
          </Link>
          <Link
            href="/about"
            className="font-medium flex gap-1 md:py-3 py-2 px-10 items-center justify-center bg-paleta-bond-200 hover:bg-paleta-blue-500 border border-paleta-blue-900 text-paleta-blue-900 rounded-lg transition-colors"
          >
            {t("Hero.about")}
          </Link>
        </div>
      </div>
      <div
        className="h-full sm:w-[100%] w-[120%] right-0 bg-paleta-blue-900 pb-52 relative z-10 sm:col-span-5 col-span-4 place-self-center mt-[-10px] md:block hidden
 "
      >
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
            className="transform rotate-[5deg]"
            placeholder="blur"
            blurDataURL="data:/images/hero.png"
            loading="eager"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
