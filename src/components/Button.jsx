const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"} rounded-full ${
        fullWidth && "w-full"
      }`}>
      {label}
      {iconURL && <img src={iconURL} alt="iconURL" className="ml-2 rounded-full h-5 w-5" />}{" "}
    </button>
  );
};

export default Button;
