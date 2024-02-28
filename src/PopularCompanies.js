import { Col, Row, Container } from "react-bootstrap";
import "./PopularCompanies.css";

function PopularCompanies() {
  return (
    <Container fluid className="body my-5">
      <Row>
        <Col>
          <h5 className="my-3 d-flex justify-content-center fs-md">
            Popular Companies
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default PopularCompanies;
