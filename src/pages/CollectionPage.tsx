import { Checkbox, Col, Row } from "antd";
import { Link } from "react-router-dom";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import CardItem from "../components/cardItem";
import { IconRight } from "../components/icons";
import CardCustom from "../components/cardCustom";
import CardItem2 from "../components/cardItem2";
import { Button } from "../components/button";

function CollectionPage() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="container py-8 " id="product">
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={6} className="font-main">
          <div className="mb-4">
            <CardCustom title="Filter by">
              <form action="">
                <div className="pt-4 px-4">
                  <Button content="CLEAR ALL" />
                </div>
                <div className="pt-4 px-4 pb-[10px] border-b border-b-solid border-b-[#e9e9e9]">
                  <p className="text-sm text-primaryTxt font-normal pb-2">
                    Product type
                  </p>
                  <Checkbox onChange={onChange}>bicycle_sport</Checkbox>
                </div>
                <div className="pt-4 px-4 pb-[10px]">
                  <p className="text-sm text-primaryTxt font-normal pb-2">
                    Brand
                  </p>
                  <div className="flex flex-col gap-2">
                    <Checkbox onChange={onChange}>Motoclub</Checkbox>
                    <Checkbox onChange={onChange}>motoclub</Checkbox>
                  </div>
                </div>
              </form>
            </CardCustom>
          </div>
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
        <Col xs={24} xl={18} className="font-main">
          <h1 className="text-2xl font-medium text-primaryTxt mb-2">
            Bicycle Sports
          </h1>
          <p className="mb-5 text-[#787878] text-sm font-normal ">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer!
            <br />
            <br />
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer! Accessorize with a straw hat and you're
            ready for summer! Accessorize with a straw hat and you're ready for
            summer!
          </p>
          <Row gutter={[24, 24]} className="mb-[70px]">
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
            <Col xs={12} xl={8}>
              <CardItem />
            </Col>
          </Row>
          <div className="flex justify-between items-center py-5 bg-[#f5f5f5]">
            <p className="text-sm font-normal px-4 text-[#323] tracking-wider">
              Showing 1 - 8 of 10 items
            </p>
            <div className="flex gap-x-3 px-4">
              <Link
                to={""}
                className="inline-block w-[35px] h-[35px] flex justify-center items-center border border-solid border-secondary bg-secondary text-white"
              >
                1
              </Link>
              <Link
                to={""}
                className="inline-block w-[35px] h-[35px] flex justify-center items-center border border-solid border-[#e9e9e9] bg-white text-primaryTxt"
              >
                2
              </Link>
              <span className="inline-block w-[35px] h-[35px] flex justify-center items-center border border-solid border-[#e9e9e9] bg-white text-primaryTxt p-2">
                <IconRight color="#232323bf" />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CollectionPage;
