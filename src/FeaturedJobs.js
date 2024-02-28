import { Col, Row, Container } from "react-bootstrap";
import "./FeaturedJob.css";

function FeaturedJobs() {
  return (
    <Container fluid className="body my-5">
      <Row>
        <Col>
          <h5 className="mb-5 d-flex justify-content-center fs-md">
            Featured Jobs
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedJobs;
