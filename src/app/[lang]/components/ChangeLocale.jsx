import { Link } from "../../../navigation";
const ChangeLocale = () => {
  return (
    <div className="flex-row flex sm:px-6 px-2 space-x-3 text-paleta-blue-500 ">
      <Link
        href={"/"}
        locale="en"
        className="hover:text-paleta-red-500 sm:text-base font-bold rounder md:p-0 tooltip tooltip-bottom duration-75"
        data-tip="English"
      >
        En
      </Link>

      <Link
        href={"/"}
        locale="es"
        className="hover:text-paleta-red-500 sm:text-base font-bold rounder md:p-0 tooltip tooltip-bottom duration-75"
        data-tip="Español"
      >
        Es
      </Link>
    </div>
  );
};

export default ChangeLocale;
