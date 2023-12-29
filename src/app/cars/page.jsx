import Image from "next/image";

import SwiperE from "./swiper";

export default function Home() {
  return (
    <main className=" xl:px-0 px-4 sm:mt-32 mt-24">
      <section className="w-full h-auto">
        <div className="w-full text-center ">
          <h2 className="sm:text-5xl text-3xl font-bold text-paleta-blue-900 ">
            Classic Cars
          </h2>
          <p className="mt-2 sm:text-lg text-base font-medium">
            We Work with the bests Classic Cars in the Country
          </p>
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
                We have what you are looking for
              </h3>
              <p className="text-paleta-bond-200 mt-2 font-medium sm:text-lg text-base">
                Quality, Efficiency and Safety Tours
              </p>
            </div>
            <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-10 sm:justify-evenly justify-center items-center mt-20">
              <div className=" flex flex-col gap-10  text-center">
                <div className="h-64 w-[264px] bg-paleta-blue-500 rounded-xl flex flex-col gap-2 py-4 px-4">
                  <h3 className="text-5xl">📚</h3>
                  <h4 className="text-xl font-semibold text-paleta-blue-900">
                    History and Experience
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    With years of experience in the industry, we have perfected
                    our service to offer a well-documented trip.
                  </p>
                </div>
                <div className="h-64 w-[264px] bg-paleta-bond-200 rounded-xl flex flex-col gap-2 py-4 px-4">
                  <h3 className="text-5xl">🌍</h3>
                  <h4 className="text-xl font-semibold text-paleta-blue-900 ">
                    Translators
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    To ensure fluid communication, we offer services translation
                    on board. Travel in comfort knowing that you will always be
                    understood.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10 text-center">
                <div className="h-64 w-[264px] bg-paleta-bond-200 rounded-xl flex flex-col gap-2 py-4 px-4">
                  <h3 className="text-5xl">⏰</h3>
                  <h4 className="text-xl font-semibold text-paleta-blue-900">
                    24/7 service
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    We are available 24 hours a day, 7 days a week week. No
                    matter when you need a taxi, we are here to serve you.
                  </p>
                </div>
                <div className="h-64 w-[264px] bg-paleta-blue-500 rounded-xl flex flex-col gap-2 py-4 px-4">
                  <h3 className="text-5xl">💡</h3>
                  <h4 className="text-xl font-semibold text-paleta-blue-900">
                    Committed
                  </h4>
                  <p className="text-medium text-paleta-blue-900">
                    We strive to exceed the expectations of our customers on
                    every trip. Your satisfaction is our greatest reward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full text-center">
        <h2 className="md:text-5xl text-2xl font-bold text-paleta-blue-500 mb-5">
          Algunos de nuestros vehiculos
        </h2>

        <SwiperE />
      </div>
    </main>
  );
}
