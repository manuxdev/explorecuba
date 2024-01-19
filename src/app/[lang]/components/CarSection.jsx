import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../../navigation";

const CarSection = () => {
  const t = useTranslations("Home");
  return (
    <section className=" h-auto md:pr-16 pr-0 mb-24">
      <div className="md:mt-0 mt-10">
        <div className="flex md:flex-row flex-col-reverse items-center justify-evenly w-full  mt-16 ">
          <Image
            alt="cars"
            src="/images/elvis.webp"
            width={750}
            height={550}
            className="max-w-[100%] w-auto h-auto min-w-[250px]  rounded-xl "
          />

          <div className="flex flex-col h-full md:pl-10 pl-5 pb-8 md:p-6 p-0 md:w-1/2 w-full">
            <span className="mb-1 font-medium text-paleta-red-900">
              {t("CarSection.span")}
            </span>
            <h2 className="font-bold text-4xl text-paleta-blue-900">
              {t("CarSection.h2")}
            </h2>
            <div className=" flex flex-col ">
              <div className="flex-row  flex items-center  py-4  text-start">
                <Image
                  alt="icon"
                  src="/icons/qua-blue.svg"
                  width={80}
                  height={80}
                  className="max-w-[50px] min-w-[20px]"
                />
                <h3 className="md:pl-5 pl-3 font-bold text-sm md:text-xl text-paleta-blue-900">
                  {t("CarSection.l1")}
                </h3>
              </div>
              <div className="flex-row  flex items-center  py-4  text-start ">
                <Image
                  alt="icon"
                  src="/icons/cal-blue-sky.svg"
                  width={80}
                  height={80}
                  className=" max-w-[50px] min-w-[30px]"
                />
                <h3 className="md:pl-5 pl-3 font-bold text-sm md:text-xl text-paleta-blue-900">
                  {t("CarSection.l2")}
                </h3>
              </div>
              <div className="flex-row  flex items-center  py-4  text-start">
                <Image
                  alt="icon"
                  src="/icons/sec-blue.svg"
                  width={120}
                  height={80}
                  className="max-w-[50px] min-w-[30px]"
                />
                <h3 className="md:pl-5 pl-3 font-bold text-sm md:text-xl text-paleta-blue-900">
                  {t("CarSection.l3")}
                </h3>
              </div>
              <div className="w-full md:text-end text-start pr-8 pt-3">
                <Link
                  href="/cars"
                  className="font-medium  border-paleta-blue-900 hover:bg-paleta-blue-500  border px-4 py-2 rounded-lg text-paleta-blue-900 transition-colors"
                >
                  <strong>+</strong> {t("CarSection.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSection;
