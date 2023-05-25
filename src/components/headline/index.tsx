interface HeadlineProps {
  title: string;
  subTitle: string;
}
function Headline({ title, subTitle }: HeadlineProps) {
  return (
    <div className="flex items-center flex-col mb-8">
      <p className="relative text-base pb-2 text-secondary uppercase">
        <span className="absolute left-[-25px] top-[9px] w-5 h-[5px] bg-secondary rounded-lg"></span>{" "}
        {subTitle}
      </p>
      <h2 className="text-primaryTxt text-4xl font-semibold uppercase">
        {title}
      </h2>
    </div>
  );
}

export default Headline;
