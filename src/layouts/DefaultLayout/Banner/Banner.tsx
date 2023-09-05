import { Row, Col, Carousel } from "antd";
import "./styled/StyledBanner.css";

import BikeImage from "../../../assets/images/bike.png";
import { Button } from "../../../components/button";

function Banner() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <section className="bg-[#cacdd3] mb-[30px] xl:mb-[70px]">
      <div className="container">
        <Carousel afterChange={onChange}>
          <Row
            gutter={24}
            className="min-h-[300px] w-full py-5 xl:min-h-[742px] !ml-0 !mr-0"
            justify="space-between"
            align="middle"
          >
            <Col xs={24} xl={12} className="font-main text-center">
              <p className="text-sm mb-2 text-[#3D3D49] xl:text-2xl xl:mb-5">
                ONLY @ $29.
              </p>
              <p className="text-[17px] text-[#232323] mb-[15px] font-bold xl:text-6xl">
                DIRT BIKE EVENT
              </p>
              <p className="hidden text-[#666666] text-xl mb-[33px] xl:block">
                New Arrivals Accsesories Available
              </p>
              <Button content="shop now" className="uppercase" />
            </Col>
            <Col xs={24} xl={12} className="font-main">
              <img src={BikeImage} loading="lazy"></img>
            </Col>
          </Row>
          <Row
            gutter={24}
            className="min-h-[300px] py-5 xl:min-h-[742px] !ml-0 !mr-0"
            justify="space-between"
            align="middle"
          >
            <Col xs={24} xl={12} className="font-main text-center">
              <p className="text-sm mb-2 text-[#3D3D49] xl:text-2xl xl:mb-5">
                ONLY @ $29.22
              </p>
              <p className="text-[17px] text-[#232323] mb-[15px] font-bold xl:text-6xl">
                DIRT BIKE EVENT
              </p>
              <p className="hidden text-[#666666] text-xl mb-[33px] xl:block">
                New Arrivals Accsesories Available
              </p>
              <Button content="shop now" className="uppercase" />
            </Col>
            <Col xs={24} xl={12}>
              <img src={BikeImage} loading="lazy"></img>
            </Col>
          </Row>
        </Carousel>
      </div>
    </section>
  );
}

export default Banner;
