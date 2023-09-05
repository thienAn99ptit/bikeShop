import { Col, Row, Form, Input } from "antd";
import { Button } from "../components/button";

function ContactPage() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="py-8">
      <h1 className="text-3xl text-primaryTxt mb-4 text-center">Contact</h1>
      <div className="container">
        <Row gutter={[60, 60]} justify="center" align="middle">
          <Col sm={24} xl={12} className="font-main">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0055/4021/6920/files/contact-us.png?v=1627456428"
                alt=""
              />
            </div>
          </Col>
          <Col sm={24} xl={12} className="font-main">
            <h2 className="text-[40px] font-semibold text-primaryTxt mt-5 mb-[10px] uppercase tracking-wider">
              get in touch
            </h2>
            <p className="text-base text-[#666]">
              We'd Love to Hear From You, Lets Get In Touch!
            </p>
            <Row gutter={[30, 30]}>
              <Col xl={12} className="font-main">
                <p className="text-sm text-blackTxt font-semibold capitalize mt-5 mb-[10px]">
                  Address
                </p>
                <p className="text-sm text-[#787878] font-normal">
                  4005, silver business point
                </p>
              </Col>
              <Col xl={12} className="font-main">
                <p className="text-sm text-blackTxt font-semibold capitalize mt-5 mb-[10px]">
                  Address
                </p>
                <p className="text-sm text-[#787878] font-normal">
                  4005, silver business point
                </p>
              </Col>
              <Col xl={12} className="font-main">
                <p className="text-sm text-blackTxt font-semibold capitalize mt-5 mb-[10px]">
                  Address
                </p>
                <p className="text-sm text-[#787878] font-normal">
                  4005, silver business point
                </p>
              </Col>
              <Col xl={12} className="font-main">
                <p className="text-sm text-blackTxt font-semibold capitalize mt-5 mb-[10px]">
                  Address
                </p>
                <p className="text-sm text-[#787878] font-normal">
                  4005, silver business point
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.4389064985357!2d106.98711156222825!3d10.944880420987522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e14b71f59e87%3A0x4d3c52821be3acba!2zMzYgxJDGsOG7nW5nIHPhu5EgMTgsIFF14bqjbmcgVGnhur9uLCBUcuG6o25nIEJvbSwgxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1685335140562!5m2!1svi!2s"
        width={"100%"}
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="my-[70px]"
      ></iframe>
      <div className="container">
        <h3 className="text-[40px] text-primaryTxt font-semibold text-center mt-5 mb-[10px]">
          leave us a message
        </h3>
        <p className="text-sm text-[#666] text-center mb-5">
          -Good For Nature, Good For You-
        </p>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[30, 0]}>
            <Col xl={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input className="h-11 border border-[#e9e9e9] py-2 px-4 rounded-[30px]" />
              </Form.Item>
            </Col>
            <Col xl={12}>
              <Form.Item
                label="Phone number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input className="h-11 border border-[#e9e9e9] py-2 px-4 rounded-[30px]" />
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Form.Item
                name="comment"
                label="Comment"
                rules={[{ required: true, message: "Please input comment" }]}
              >
                <Input.TextArea
                  className="border border-[#e9e9e9] py-2 px-4 rounded-[30px]"
                  style={{ height: 200, resize: "none" }}
                />
              </Form.Item>
              <div className="flex justify-center">
                <Button type="primary" content="Send" htmlType="submit" />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage;
