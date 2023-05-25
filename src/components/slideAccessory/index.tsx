import { Carousel } from "antd";
import CardItem2 from "../cardItem2";
import IconCircle from "../iconCircle";

interface SlideAccessoryProps {
  title: string;
}

function SlideAccessory({ title }: SlideAccessoryProps) {
  return (
    <div>
      <div className="flex justify-between items-center text-2xl text-primary font-semibold pb-2 border-b border-solid border-gray-200 uppercase mb-4">
        <span>{title}</span>
        <div className="flex gap-x-2">
          <IconCircle kind="left" />
          <IconCircle kind="right" />
        </div>
      </div>
      <Carousel autoplay={true}>
        <div>
          <CardItem2 />
          <CardItem2 />
          <CardItem2 />
        </div>
        <div>
          <CardItem2 />
          <CardItem2 />
          <CardItem2 />
        </div>
        <div>
          <CardItem2 />
          <CardItem2 />
          <CardItem2 />
        </div>
      </Carousel>
    </div>
  );
}

export default SlideAccessory;
