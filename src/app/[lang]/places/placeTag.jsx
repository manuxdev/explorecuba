const PlaceTag = ({ name, onClick, isSelected, d }) => {
  const buttonStyle = isSelected
    ? "fill-paleta-blue-500"
    : "fill-paleta-blue-900";
  return (
    <path
      d={d}
      name={name}
      onClick={() => onClick(name)}
      className={`${buttonStyle} cursor-pointer hover:fill-paleta-blue-500 transition-all `}
    ></path>
  );
};

export default PlaceTag;
