import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { IconBuy, IconEyes, IconHearth } from "../icons";

function CardItem2() {
  return (
    <Row align="middle" className="mb-4">
      <Col span={8}>
        <Link to={"#"}>
          <img
            src="https://cdn.shopify.com/s/files/1/0055/4021/6920/products/2_253b1010-ca59-406f-a047-edb3af4086c9_720x.jpg?v=1627367033"
            alt=""
            loading="lazy"
          />
        </Link>
      </Col>
      <Col span={16} push={2}>
        <Link to={"#"} className="text-primaryTxt text-base mb-1">
          A folding Bike1
        </Link>
        <p className="text-lg text-secondary font-medium mb-1">$59.00</p>
        <ul className="flex gap-x-1 list-none">
          <li className="flex justify-center items-center p-1 w-[28px] h-[28px] bg-secondary rounded cursor-pointer hover:bg-black transition-colors">
            <IconEyes color="#fff" />
          </li>
          <li className="flex justify-center items-center p-1 w-[28px] h-[28px] bg-secondary rounded cursor-pointer hover:bg-black">
            <IconHearth color="#fff" />
          </li>
          <li className="flex justify-center items-center p-1 w-[28px] h-[28px] bg-secondary rounded cursor-pointer hover:bg-black">
            <IconBuy color="#fff" />
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default CardItem2;
