import Image from "next/image";
import Link from "next/link";
import React from "react";

const work = [
  {
    icon: "/icons/gps.svg",
    title: "Search Location",
    desc: "Make your reservation quickly and easily by choosing our specialized service.",
  },
  {
    icon: "/icons/pay.svg",
    title: "Easy Payment",
    desc: "Simple and secure payment for a hassle-free experience.",
  },
  {
    icon: "/icons/trip.svg",
    title: "Make Trip",
    desc: " Create your personalized trip with ease and comfort.",
  },
];
export default function Home({ params: { lang } }) {
  return (
    <main className="xl:pl-16 xl:px-0 px-4 sm:mt-32 mt-24">
      {/*//todo ABOUT US  */}
      {/* <h1 className="w-full text-center text-5xl font-bold text-paleta-blue-900 pr-16">
        About US
      </h1> */}

      <section className="w-full h-auto  flex xl:flex-row flex-col items-start justify-center">
        <div className="xl:w-[550px] xl:h-[400px] w-auto h-auto bg-paleta-blue-500 rounded-xl  py-10 pl-8 xl:pr-20 pr-8">
          <h2 className="text-paleta-blue-900 text-5xl  font-bold">About us</h2>
          <p className="text-paleta-blue-900 mt-5 font-medium text-sm leading-6">
            We stand out for providing unparalleled tourist experiences,
            offering personalized tours in convertible cars that capture the
            vintage essence of the island. From tours through the enchanting
            landscapes of Varadero to exploring the rich history of Havana, our
            team of professional drivers will guide you on an authentic and
            comfortable journey. With competitive rates, we are committed to
            providing quality service that reflects Cuban authenticity and
            hospitality. Discover the island with us and make your visit to Cuba
            a memorable experience.
          </p>
        </div>
        <div className="xl:w-[600px] xl:h-[400px] w-auto h-auto bg-paleta-blue-900 rounded-xl xl:-translate-x-16 xl:translate-y-10 -translate-y-5 py-8 px-10">
          <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
            <div>
              <h3 className="text-paleta-blue-500 text-2xl font-bold">
                Mission
              </h3>
              <p className="text-paleta-bond-200 font-medium mt-3">
                Provide exceptional trips in classic cars, revealing the
                authenticity of Cuba with comfort and style, creating
                unforgettable memories for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-paleta-blue-500 text-2xl font-bold">
                Our Vision
              </h3>
              <p className="text-paleta-bond-200 font-medium mt-3">
                To be the preferred option for tourist transportation in Cuba,
                standing out for our distinctive service and contributing to the
                charm of each trip.
              </p>
            </div>
            <div>
              <h3 className="text-paleta-blue-500 text-2xl font-bold">
                Our Values
              </h3>
              <p className="text-paleta-bond-200 font-medium mt-3">
                Commitment to authenticity, excellence in service, respect for
                Cuban culture and customer satisfaction as a constant priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*//todo Work */}
      <section className=" h-auto md:pr-16 pr-0 my-20">
        <div className="md:mt-0 mt-20">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="font-bold sm:text-3xl text-xl text-paleta-blue-900">
              HOW WE WORK
            </h2>
            <p className="mt-3">
              We operate with efficiency and passion, offering personalized
              tours and comfortable transfers for unforgettable experiences.
            </p>
            <div className="flex sm:flex-row flex-col items-center sm:gap-24 gap-10 sm:w-[75%] w-[70%] mt-10">
              {work.map((box, index) => (
                <div
                  key={index}
                  className=" flex flex-col items-center justify-center  gap-3"
                >
                  <Image
                    alt={box.title}
                    src={box.icon}
                    width={60}
                    height={60}
                  />
                  <h3 className="text-xl font-bold text-paleta-blue-900">
                    {box.title}
                  </h3>
                  <p>{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*//todo Contacts  */}
      <section className="h-auto md:pr-16 pr-0 my-20">
        <div className="md:mt-0 mt-20">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="text-3xl font-bold  sm:text-4xl text-paleta-blue-900">
              Contact Us
            </h2>
            <p className="max-w-[900px] mt-5">
              Were here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </div>

          <div className="container-address-steps flex sm:flex-row flex-col-reverse">
            <div className="container-address flex flex-col gap-6 w-full px-1 md:pl-16 pl-4  justify-center sm:items-start items-center  sm:mt-10 mt-20">
              <div className="flex sm:flex-row flex-col gap-3 items-center">
                <div className="flex gap-2 justify-center ">
                  <HomeIcon />{" "}
                  <h3 className="sm:text-xl text-base font-bold text-paleta-blue-900">
                    Address:
                  </h3>
                </div>
                <p className="text-base ">Varadero, Cuba</p>
              </div>
              <div className="flex sm:flex-row flex-col gap-3 items-center">
                <div className="flex gap-2 justify-center">
                  <PhoneIcon />{" "}
                  <h3 className="sm:text-xl text-base font-bold text-paleta-blue-900">
                    Phone:
                  </h3>
                </div>
                <Link
                  href="https://api.whatsapp.com/send?phone=5353762922"
                  target="_blank"
                >
                  <p className="text-base text-paleta-red-500 hover:text-paleta-red-900">
                    +53 53762922
                  </p>
                </Link>
              </div>
              <div className="flex sm:flex-row flex-col gap-3 items-center">
                <div className="flex gap-2 justify-center">
                  <MailIcon className="stroke-paleta-blue-900" />{" "}
                  <h3 className="sm:text-xl text-base font-bold text-paleta-blue-900">
                    Email:
                  </h3>
                </div>
                <Link href="mailto:explorecubainclassiccars@gmail.com">
                  <p className="text-base text-wrap text-paleta-red-500 hover:text-paleta-red-900">
                    explorecubainclassiccars@gmail.com
                  </p>
                </Link>
              </div>
            </div>

            <div className="container-steps flex items-start  w-full gap-4 px-4 text-start md:px-6 lg:gap-10 mt-10">
              <div className="flex flex-col gap-10 items-center">
                <div className="flex sm:flex-row flex-col sm:text-start text-center items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    1
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3 font-medium text-paleta-blue-900">
                    Start the reservation by sending a message via WhatsApp with
                    your details and preferences.
                  </p>
                </div>
                <div className="flex sm:flex-row flex-col sm:text-start text-center items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    2
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3 font-medium text-paleta-blue-900">
                    Receive quick confirmation and itinerary details directly in
                    your WhatsApp application.
                  </p>
                </div>
                <div className="flex sm:flex-row flex-col sm:text-start text-center items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    3
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3 font-medium text-paleta-blue-900">
                    Collaborate with our team to customize your trip according
                    to your needs and preferences.
                  </p>
                </div>
                <div className="flex sm:flex-row flex-col sm:text-start text-center items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    4
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3 font-medium text-paleta-blue-900 w-full">
                    Enjoy the trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#012F47"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#012F47"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#012F47"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
