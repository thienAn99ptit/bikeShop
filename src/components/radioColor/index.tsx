interface RadioColorProps {
  color: string;
}
function RadioColor({ color }: RadioColorProps) {
  return (
    <>
      <input type="radio" id={`color--${color}`} className="hidden" />
      <label
        htmlFor={`color--${color}`}
        className={`inline-block w-10 h-10 border-transparent shadow-lg bg-[${color}]`}
      ></label>
    </>
  );
}

export default RadioColor;
