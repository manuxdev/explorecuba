import Image from "next/image";
import Link from "next/link";
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
export default function Home() {
  return (
    <main className="xl:pl-16 xl:px-0 px-4 sm:mt-32 mt-24">
      {/*//todo ABOUT US  */}
      {/* <h1 className="w-full text-center text-5xl font-bold text-paleta-blue-900 pr-16">
        About US
      </h1> */}

      <section className="w-full h-auto  flex xl:flex-row flex-col items-start justify-center">
        <div className="xl:w-[550px] xl:h-[400px] w-auto h-auto bg-paleta-blue-500 rounded-xl  py-10 pl-8 xl:pr-20 pr-8">
          <h2 className="text-paleta-blue-900 text-5xl  font-bold">About us</h2>
          <p className="text-paleta-bond-200 mt-5 font-medium text-lg">
            Culpa do sunt est qui magna cupidatat amet ad aliquip amet eu.
            Cupidatat voluptate mollit non. Excepteur excepteur nulla magna.
            Tempor commodo consectetur nostrud reprehenderit amet proident
            voluptate pariatur est in nulla veniam est. Consequat culpa dolor ad
            duis dolor excepteur laboris consectetur eiusmod.
          </p>
        </div>
        <div className="xl:w-[600px] xl:h-[400px] w-auto h-auto bg-paleta-blue-900 rounded-xl xl:-translate-x-16 xl:translate-y-10 -translate-y-5 py-8 px-10">
          <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
            <div>
              <h3 className="text-paleta-blue-500 text-2xl font-bold">
                Mision
              </h3>
              <p className="text-paleta-bond-200 font-medium mt-3">
                Magna ullamco tempor irure velit eiusmod est officia cupidatat.
                quis. iru labore laborre mollit. Sunt reprehenderit consequat
                lab
              </p>
            </div>
            <div>
              <h3 className="text-paleta-blue-500 text-2xl font-bold">
                Our Vision
              </h3>
              <p className="text-paleta-bond-200 font-medium mt-3">
                Magna ullamco tempor irure velit eiusmod est officia cupidatat.
                quis. iru labore laborre mollit. Sunt reprehenderit consequat
                lab
              </p>
            </div>
            <div>
              <h3 className="text-paleta-blue-500 text-2xl font-bold">
                Our Values
              </h3>
              <p className="text-paleta-bond-200 font-medium mt-3">
                Magna ullamco tempor irure velit eiusmod est officia cupidatat.
                quis. iru labore laborre mollit. Sunt reprehenderit consequat
                lab
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
              labore duis aliquip in fugiatlabore duis aliquip in fugiatlabore
              duis aliquip in fugiat
            </p>
            <div className="flex sm:flex-row flex-col items-center sm:gap-24 gap-10 sm:w-[90%] w-[70%] mt-10">
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
                  <h3 className="text-xl font-bold">{box.title}</h3>
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
            <div className="container-address flex flex-col gap-6 w-full md:pl-16 pl-4 items-start  sm:mt-10 mt-20">
              <div className="flex gap-3 items-center">
                <div className="flex gap-2 justify-center ">
                  <HomeIcon /> <h3 className="text-xl font-bold">Address:</h3>
                </div>
                <p className="text-base ">Varadero, Cuba</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-2 justify-center">
                  <PhoneIcon /> <h3 className="text-xl font-bold">Phone:</h3>
                </div>
                <p className="text-base ">+53 *******</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-2 justify-center">
                  <MailIcon /> <h3 className="text-xl font-bold">Email:</h3>
                </div>

                <p className="text-base ">info@ourcompany.com</p>
              </div>
            </div>

            <div className="container-steps flex items-start  w-full gap-4 px-4 text-start md:px-6 lg:gap-10 mt-10">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    1
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
                <div className="flex items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    2
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
                <div className="flex items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    3
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
                <div className="flex items-center w-full gap-4">
                  <div className="flex items-center justify-center  rounded-full text-paleta-bond-200  bg-paleta-blue-900 text-lg font-bold sm:px-5 sm:py-3 px-4 py-2">
                    4
                  </div>
                  <p className="border-b-2 border-paleta-blue-900 p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
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
      stroke="currentColor"
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
      stroke="currentColor"
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
