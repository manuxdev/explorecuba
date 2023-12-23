import React from "react";
import NavLink from "./navLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col md:hidden py-4 items-center bg-paleta-blue-900 w-[90%] ml-3 rounded-md">
      {links.map((link, index) => (
        <li key={index} className="w-full text-center  ">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
