import { Col, Collapse, Row } from "antd";
import CardCustom from "../components/cardCustom";
import "./styled/pages.css";

const { Panel } = Collapse;

function ProductPage() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <Row className="container" id="product">
      <Col xs={24} xl={6}>
        <CardCustom title="Shop by categories">
          <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </CardCustom>
      </Col>
      <Col xs={24} xl={18}>
        One of three columns
      </Col>
    </Row>
  );
}

export default ProductPage;
