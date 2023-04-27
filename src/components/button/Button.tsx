interface ButtonProp {
  content: string;
  className?: string;
  type?: string;
  onClick?: any;
}

function Button({ content, className, type = "primary", onClick }: ButtonProp) {
  return (
    <button
      className={`bg-secondary  px-5 py-[10px] rounded-full text-white text-sm font-normal ${className} ${
        type === "second" && "bg-black"
      }`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
