import Link from "next/link";
// import { HandleScroll } from "../utils/handleScroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      // onClick={HandleScroll}
      href={href}
      className="block py-2 pl-3 pr-4 text-paleta-blue-500 sm:text-base font-bold rounder md:p-0 hover:text-paleta-red-500 active:text-paleta-blue-900 "
    >
      {title}
    </Link>
  );
};
export default NavLink;
