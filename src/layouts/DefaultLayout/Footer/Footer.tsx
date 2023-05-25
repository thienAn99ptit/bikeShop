import { Col, Row } from "antd";

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container pt-14 pb-14">
        <Row gutter={3}>
          <Col span={6}>
            <p className="text-xl text-white font-medium mb-5">
              STORE INFORMATION
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">
              <i></i>4005, silver business point
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">
              <i></i>9988776655
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium">
              <i></i>info@example.com
            </p>
          </Col>
          <Col span={4}>
            <p className="text-xl text-white font-medium mb-5">YOUR ACCOUNT</p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">
              Personal info
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium">Orders</p>
          </Col>
          <Col span={4}>
            <p className="text-xl text-white font-medium mb-5">OUR PRODUCTS</p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">
              Prices drop
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">
              New product
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium">Best sales</p>
          </Col>
          <Col span={4}>
            <p className="text-xl text-white font-medium mb-5">OUR COMPANY</p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">Search</p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">Product</p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">Orders</p>
            <p className="text-[#a7a7a7] text-sm font-medium">FAQs</p>
          </Col>
          <Col span={6}>
            <p className="text-xl text-white font-medium mb-5">
              SIGN UP & GET OFFER
            </p>
            <p className="text-[#a7a7a7] text-sm font-medium mb-5">
              Subscribe our newsletter and get latest offers
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
