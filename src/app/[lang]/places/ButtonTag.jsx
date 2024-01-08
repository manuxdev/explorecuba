const ButtonTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "border-paleta-blue-500 text-paleta-blue-500"
    : "border-paleta-blue-900 hover:border-paleta-blue-500 text-paleta-blue-900";
  return (
    <button
      className={`${buttonStyle} rounded-full  sm:px-6  sm:py-3 px-4 py-2 md:text-xl text-sm cursor-pointer transition-all duration-300 border-2  font-bold hover:text-paleta-blue-500`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ButtonTag;
