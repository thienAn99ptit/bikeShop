interface ButtonProp {
  content: string;
  className?: string;
  type?: string;
  htmlType?: string;
  onClick?: any;
}

function Button({
  content,
  className,
  type = "primary",
  htmlType,
  onClick,
}: ButtonProp) {
  return (
    <button
      className={`px-5 py-[10px] rounded-full text-white text-sm font-medium  ${className} ${
        type === "second"
          ? "bg-black hover:bg-secondary"
          : "bg-secondary hover:bg-black"
      } transition-all ease-linear`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
