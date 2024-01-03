import Image from "next/image";
import { Link } from "../../../navigation";
import NavLink from "./navLink";
import { useTranslations } from "next-intl";

const NavbarLinks = () => {
  const t = useTranslations("NavBar");
  const keys = ["link1", "link2", "link3"];
  return (
    <div className="menu hidden md:block md:w-auto">
      <ul className="flex p-4 md:p-0 md:flex-row items-center md:space-x-4 mt-0">
        {keys.map((item, index) => (
          <li key={index}>
            <NavLink href={t(`${item}.path`)} title={t(`${item}.title`)} />
          </li>
        ))}

        <div className="pl-4 flex-row gap-4 md:flex hidden">
          <Link
            href="https://www.facebook.com/profile.php?id=61552355900498"
            target="_blank"
          >
            <Image
              src="/icons/face-sky.svg"
              alt="face"
              width={30}
              height={30}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/icons/insta-sky.svg"
              alt="face"
              width={30}
              height={30}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5353762922"
            target="_blank"
          >
            <Image
              src="/icons/wht-sky.svg"
              alt="face"
              width={30}
              height={30}
              className="hover:scale-110 transition-all duration-200"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default NavbarLinks;
