import { Row, Col, Carousel } from "antd";
import "./styled/StyledBanner.css";

import BikeImage from "../../../assets/images/bike.png";
import { Button } from "../../../components/button";

function Banner() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <section className="bg-[#cacdd3] mb-[70px]">
      <div className="container ">
        <Carousel afterChange={onChange}>
          <Row
            gutter={24}
            className="min-h-[742px] dpFlex"
            justify="space-between"
            align="middle"
          >
            <Col className="gutter-row" span={12}>
              <p className="text-2xl mb-5 text-[#3D3D49]">ONLY @ $29.</p>
              <p className="text-6xl text-[#232323] mb-[15px] font-bold">
                DIRT BIKE EVENT
              </p>
              <p className="text-[#666666] text-xl mb-[33px]">
                New Arrivals Accsesories Available
              </p>
              <Button content="shop now" className="uppercase" />
            </Col>
            <Col className="gutter-row" span={12}>
              <img src={BikeImage}></img>
            </Col>
          </Row>
          <Row
            gutter={24}
            className="min-h-[742px] dpFlex"
            justify="space-between"
            align="middle"
          >
            <Col className="gutter-row" span={12}>
              <p className="text-2xl mb-5 text-[#3D3D49]">ONLY @ $29.22</p>
              <p className="text-6xl text-[#232323] mb-[15px] font-bold">
                DIRT BIKE EVENT
              </p>
              <p className="text-[#666666] text-xl mb-[33px]">
                New Arrivals Accsesories Available
              </p>
              <Button content="shop now" className="uppercase" />
            </Col>
            <Col className="gutter-row" span={12}>
              <img src={BikeImage}></img>
            </Col>
          </Row>
        </Carousel>
      </div>
    </section>
  );
}

export default Banner;
