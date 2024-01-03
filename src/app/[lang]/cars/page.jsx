import Image from "next/image";

import SwiperE from "./swiper";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Cars");
  return (
    <main className=" xl:px-0 px-4 sm:mt-32 mt-24">
      <section className="w-full h-auto">
        <div className="w-full text-center ">
          <h2 className="sm:text-5xl text-3xl font-bold text-paleta-blue-900 ">
            {t("sec1.h2")}
          </h2>
          <p className="mt-2 sm:text-lg text-base font-medium">{t("sec1.p")}</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-10">
          <Image
            alt="car"
            width={800}
            height={800}
            src="/images/car-per-2.png"
            className="transform rotate-[1deg] z-10"
          />
          <div className="xl:w-full w-[110%] h-auto bg-paleta-blue-900 sm:-translate-y-16 -translate-y-10 py-20">
            <div className="flex flex-col w-full justify-center items-center text-center text-paleta-bond-200">
              <h3 className="sm:text-3xl text-xl font-semibold ">
                {t("sec2.h3")}
              </h3>
              <p className="text-paleta-bond-200 mt-2 font-medium sm:text-lg text-base">
                {t("sec2.p")}
              </p>
            </div>
            <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-10 sm:justify-evenly justify-center items-center mt-20">
              <div className=" flex flex-col gap-10  text-center">
                <div className="h-64 w-[264px] bg-paleta-blue-500 rounded-xl flex flex-col gap-2 py-4 px-4 items-center">
                  <Image
                    alt="history"
                    width={60}
                    height={60}
                    src="/icons/history.svg"
                  />
                  <h4 className="text-xl font-semibold text-paleta-blue-900">
                    {t("sec2.h4_history")}
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    {t("sec2.p_history")}
                  </p>
                </div>
                <div className="h-auto w-[264px] bg-paleta-bond-200 rounded-xl flex flex-col gap-2 py-4 px-4 items-center">
                  <Image
                    alt="translate"
                    width={60}
                    height={60}
                    src="/icons/translate.svg"
                  />
                  <h4 className="text-xl font-semibold text-paleta-blue-900 ">
                    {t("sec2.h4_translators")}
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    {t("sec2.p_translators")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10 text-center">
                <div className="h-64 w-[264px] bg-paleta-bond-200 rounded-xl flex flex-col gap-2 py-4 px-4 items-center">
                  <Image
                    alt="clock"
                    width={60}
                    height={60}
                    src="/icons/clock.svg"
                  />
                  <h4 className="text-xl font-semibold text-paleta-blue-900">
                    {t("sec2.h4_service")}
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    {t("sec2.p_service")}
                  </p>
                </div>
                <div className="h-64 w-[264px] bg-paleta-blue-500 rounded-xl flex flex-col gap-2 py-4 px-4 items-center">
                  <Image
                    alt="light"
                    width={60}
                    height={60}
                    src="/icons/light.svg"
                  />
                  <h4 className="text-xl font-semibold text-paleta-blue-900">
                    {t("sec2.h4_committed")}
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    {t("sec2.p_committed")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full text-center">
        <h2 className="md:text-5xl text-2xl font-bold text-paleta-blue-500 mb-5">
          {t("sec2.vehicles")}
        </h2>

        <SwiperE />
      </div>
    </main>
  );
}
