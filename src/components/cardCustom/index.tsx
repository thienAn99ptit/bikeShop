interface CardCustomProps {
  title: string;
  children: any;
}

function CardCustom({ title, children }: CardCustomProps) {
  return (
    <div className="border border-solid border-[#e9e9e9]">
      <p className="text-base font-normal text-primaryTxt bg-[#f5f5f5] p-[15px] uppercase">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
}

export default CardCustom;
