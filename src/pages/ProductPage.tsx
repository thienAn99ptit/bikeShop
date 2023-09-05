import { Col, Image, Row } from "antd";
import CardCustom from "../components/cardCustom";
import CardItem2 from "../components/cardItem2";
import RadioColor from "../components/radioColor";
import "./styled/pages.css";
import { Button } from "../components/button";
import Headline from "../components/headline";
import CardItem from "../components/cardItem";

function ProductPage() {
  return (
    <div className="container py-5" id="product">
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={6}>
          <div className="mb-4">
            <CardCustom title="New Product">
              <div className="pt-2 px-2">
                <CardItem2 />
                <CardItem2 />
                <CardItem2 />
              </div>
            </CardCustom>
          </div>
          <CardCustom title="Special Product">
            <div className="pt-2 px-2">
              <CardItem2 />
              <CardItem2 />
              <CardItem2 />
            </div>
          </CardCustom>
        </Col>
        <Col xs={24} xl={18}>
          <Row gutter={[24, 24]} className="mb-[70px]">
            <Col xs={24} xl={12}>
              <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></Image>
            </Col>
            <Col xs={24} xl={12}>
              <h1 className="text-[26px] text-primaryTxt">A Folding Bike1</h1>
              <p className="text-primaryTxt text-2xl font-medium">$59.00</p>
              <p className="text-base text-[#666] font-medium mb-1">
                Vendor: Motoclub
              </p>
              <p className="text-base text-[#666] font-medium mb-1">
                Product Type bicycle
              </p>
              <p className="text-base text-[#666] font-medium mb-2">Color</p>
              <div>
                <span className="inline-block w-10 h-10 border-transparent shadow-lg bg-red-500" />
                <span className="inline-block w-10 h-10 mx-2 border-transparent shadow-lg bg-yellow-300" />
                <span className="inline-block w-10 h-10 border-transparent shadow-lg bg-blue-500" />
              </div>
              <div className="flex gap-x-2 mt-8 mb-5">
                <Button className="w-[45%] py-[15px]" content="ADD TO CART" />
                <Button
                  className="w-[45%] py-[15px]"
                  type="second"
                  content="BUY IT NOW"
                />
              </div>
            </Col>
          </Row>
          <Headline
            subTitle="THE PRODUCTS"
            title="YOU MAY ALSO LIKE"
          ></Headline>
          <Row gutter={[24, 24]} className="mb-[70px]">
            <Col xl={8}>
              <CardItem />
            </Col>
            <Col xl={8}>
              <CardItem />
            </Col>
            <Col xl={8}>
              <CardItem />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
