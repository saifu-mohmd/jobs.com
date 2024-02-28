import { Col, Row, Container } from "react-bootstrap";
import "./ActivelyHiring.css";

function ActivelyHiring() {
  return (
    <Container className="body mt-4 mb-3">
      <Row>
        <Col>
          <h5 className="my-5 d-flex justify-content-center fs-md">
            Actively Hiring
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivelyHiring;
