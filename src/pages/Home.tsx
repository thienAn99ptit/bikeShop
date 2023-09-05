import { Col, Row } from "antd";
import { Button } from "../components/button";
import CardItem from "../components/cardItem";
import Headline from "../components/headline";
import ImageLink from "../components/imgLink";
import SlideAccessory from "../components/slideAccessory";
import IconCircle from "../components/iconCircle";
import CardBlog from "../components/cardBlock";
import Banner from "../layouts/DefaultLayout/Banner/Banner";

function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Headline title="trending products" subTitle="products" />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 mb-[30px]">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="flex justify-center mb-[70px]">
          <Button content="View All"></Button>
        </div>
        <Headline title="shop by riding" subTitle="category" />
        <div className="grid grid-cols-3 gap-4 mb-10">
          <ImageLink />
          <ImageLink />
          <ImageLink />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-[70px]">
          <SlideAccessory title="HELMETS" />
          <SlideAccessory title="JACKETS" />
          <SlideAccessory title="GLOVES" />
        </div>
        <Headline title="OUR RIDERS" subTitle="TESTIMONIALS" />
        <div className="grid grid-cols-2 gap-x-4">
          <Row className="bg-[#f7f7f7] group" align={"middle"}>
            <Col span={8}>
              <img
                src="https://cdn.shopify.com/s/files/1/0055/4021/6920/files/t1.png?v=1627384172"
                alt=""
                loading="lazy"
              />
            </Col>
            <Col span={16} className="pointer-events-none">
              <p className="text-primaryTxt text-lg font-normal mb-1">
                LUIES CHARLS
              </p>
              <p className="text-secondary text-base font-medium mb-1 group-hover:tracking-widest ease-linear duration-500">
                Web design
              </p>
              <p className="text-base text-[#787878] ">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit,
                <br /> sed do eiusmod tem incididunt ut labor
              </p>
            </Col>
          </Row>
          <Row className="bg-[#f7f7f7] group" align={"middle"}>
            <Col span={8}>
              <img
                src="https://cdn.shopify.com/s/files/1/0055/4021/6920/files/t1.png?v=1627384172"
                alt=""
                loading="lazy"
              />
            </Col>
            <Col span={16} className="pointer-events-none">
              <p className="text-primaryTxt text-lg font-normal mb-1">
                LUIES CHARLS
              </p>
              <p className="text-secondary text-base font-medium mb-1 group-hover:tracking-widest ease-linear duration-500">
                Web design
              </p>
              <p className="text-base text-[#787878]">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit,
                <br /> sed do eiusmod tem incididunt ut labor
              </p>
            </Col>
          </Row>
        </div>
        <div className="flex justify-center gap-x-2 mt-8 mb-[70px]">
          <IconCircle kind="left" />
          <IconCircle kind="right" />
        </div>
        <Headline title="OUR LATEST BLOG" subTitle="WELCOME TO OUR STORE" />
        <div className="grid grid-cols-3 gap-x-4">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
        <div className="flex justify-center gap-x-2 mt-8 mb-[70px]">
          <IconCircle kind="left" />
          <IconCircle kind="right" />
        </div>
        <Headline title="best seller" subTitle="products" />
        <div className="grid grid-cols-4 gap-6 mb-[30px]">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="flex justify-center mb-[70px]">
          <Button content="View All"></Button>
        </div>
      </div>
    </>
  );
}

export default Home;
