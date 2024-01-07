import Image from "next/image";
import { Link } from "../../../navigation";
const ChangeLocale = () => {
  return (
    <div className="flex-row flex sm:px-3 px-2 space-x-5 text-paleta-blue-500 ">
      <Link
        href={"/"}
        locale="en"
        className="hover:text-paleta-red-500 sm:text-base font-bold rounder md:p-0  duration-75"
        data-tip="English"
      >
        <Image src="/icons/eeuu.svg" alt="english" width={25} height={20} />
      </Link>

      <Link
        href={"/"}
        locale="es"
        className="hover:text-paleta-red-500 sm:text-base font-bold rounder md:p-0  duration-75"
        data-tip="Español"
      >
        <Image src="/icons/spain.svg" alt="spanish" width={25} height={20} />
      </Link>
    </div>
  );
};

export default ChangeLocale;
