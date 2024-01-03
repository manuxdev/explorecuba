import React from "react";
const PlaceTag = ({ name, onClick, isSelected, d, id }) => {
  const buttonStyle = isSelected
    ? "fill-paleta-blue-500 "
    : "  fill-paleta-blue-900 ";
  return (
    <path
      d={d}
      id={id}
      name={name}
      onClick={() => onClick(name)}
      className={`${buttonStyle} cursor-pointer hover:fill-paleta-blue-500 transition-all`}
    ></path>
  );
};

export default PlaceTag;
{
  /* <button
className={`${buttonStyle} rounded-full  px-6  py-3 md:text-xl text-base cursor-pointer transition-all duration-300 border-2 `}
onClick={() => onClick(name)}
>
{name}
</button> */
}