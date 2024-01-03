import { Link } from "../../../navigation";
import Image from "next/image";
import NavbarLinks from "./navbarLinks";
import NavButton from "./NavButton";
import { useTranslations } from "next-intl";
import ChangeLocale from "./ChangeLocale";

const Navbar = ({ locale }) => {
  const hola = locale;

  const t = useTranslations("NavBar");
  const links = [
    {
      title: `${t("link1.title")}`,
      path: `${t("link1.path")}`,
    },
    {
      title: `${t("link2.title")}`,
      path: `${t("link2.path")}`,
    },
    {
      title: `${t("link3.title")}`,
      path: `${t("link3.path")}`,
    },
  ];
  return (
    <nav className="absolute w-full top-0 lef-0 right-0 z-30 bg-transparent ">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto py-2 px-4">
        <div className="flex flex-row">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image
              src="/images/logo.png"
              loading="eager"
              width={300}
              height={300}
              className="sm:w-[200px] sm:h-[70px] w-[160px] h-[50px]"
              alt="logo"
            />
          </Link>
        </div>
        <div className=" flex flex-row justify-center items-center">
          <ChangeLocale />
          <NavButton links={links} />
          <NavbarLinks />
        </div>
        {hola}
      </div>
    </nav>
  );
};

export default Navbar;
