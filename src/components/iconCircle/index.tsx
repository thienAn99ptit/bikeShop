import { IconLeft, IconRight } from "../icons";

interface IconCircleProps {
  kind: string;
}

function IconCircle({ kind }: IconCircleProps) {
  return (
    <span className="inline-block w-[34px] h-[34px] bg-secondary rounded-full cursor-pointer">
      {kind === "left" ? <IconLeft color="#fff" /> : <IconRight color="#fff" />}
    </span>
  );
}

export default IconCircle;
