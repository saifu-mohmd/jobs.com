import { Col, Row, Container } from "react-bootstrap";
import "./OurUsersSays.css";

function OurUsersSays() {
  return (
    <Container fluid className="body mt-4 mb-3 ">
      <Row>
        <Col>
          <h5 className="my-5 d-flex justify-content-center fs-md">
            What Our Users Says
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default OurUsersSays;
