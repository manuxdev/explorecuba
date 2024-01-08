const ButtonTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "border-paleta-blue-500 text-paleta-blue-500"
    : "border-paleta-blue-900 hover:border-paleta-blue-500 text-paleta-blue-900";
  return (
    <button
      className={`${buttonStyle} rounded-full  px-6  py-3 md:text-xl text-base cursor-pointer transition-all duration-300 border-2  font-bold hover:text-paleta-blue-500`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ButtonTag;
