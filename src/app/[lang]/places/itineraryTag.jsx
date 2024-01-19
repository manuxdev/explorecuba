const ItineraryTag = ({ title, onClick, isSelected, desc }) => {
  const buttonStyle = isSelected
    ? "border-paleta-blue-900 "
    : "border-transparent";
  return (
    <button
      onClick={() => onClick(title, desc)}
      className={`${buttonStyle} border-b-2 text-start`}
    >
      <span className="text-paleta-blue-900 text-xl font-bold ">{title}</span>
    </button>
  );
};

export default ItineraryTag;
