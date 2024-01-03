import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="footer border-t border-t-[#012e4756] ">
      <div className=" sm:px-8 px-4 py-4 flex justify-between w-full items-center ">
        <div>
          <Link href="/">
            <strong className="text-paleta-blue-900 sm:text-xl text-base">
              Explore Cuba in Classic Cars
            </strong>
          </Link>
          <p className="text-sm">{t("p")}</p>
        </div>
        <div>
          <div className="flex-row sm:gap-6 gap-2 flex  ">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61552355900498"
            >
              <Image
                src="/icons/face-blue.svg"
                alt="Facebook"
                width={30}
                height={30}
                className=" hover:scale-110 transition-all duration-200"
              />
            </Link>
            <Link target="_blank" href="#">
              <Image
                src="/icons/insta-blue.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="hover:scale-110 transition-all duration-200"
              />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5353762922"
            >
              <Image
                src="/icons/wht-blue.svg"
                alt="Whatsapp"
                width={30}
                height={30}
                className="hover:scale-110  transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
