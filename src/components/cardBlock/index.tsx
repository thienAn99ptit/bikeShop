import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import { IconUser } from "../icons";
import { Button } from "../button";

function CardBlog() {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://cdn.shopify.com/s/files/1/0055/4021/6920/articles/8_605d6bbc-279d-4930-92c7-1e7635031eff.png?v=1627446716"
        />
      }
    >
      <p className="relative text-sm text-primaryTxt mb-3 flex gap-x-1 items-center">
        <Button content="28 JUl 2021" className="absolute top-[-24px] left-1/2 -translate-y-1/2 -translate-x-1/2 text-[17px] font-semibold" />
        <i>
          <IconUser color="#e36358" />
        </i>
        by Ishi Themes
      </p>
      <Link to={"#"} className="text-base text-primaryTxt font-medium mb-3">
        UPON OF SEASONS EARTH
      </Link>
      <p className="text-sm text-[#787878] truncate">
        Faded short sleeves t-shirt with high neckline. Soft and stretchy
        material for a comfortable fit. Accessorize w
      </p>
    </Card>
  );
}

export default CardBlog;
