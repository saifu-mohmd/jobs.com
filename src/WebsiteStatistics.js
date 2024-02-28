import { Col, Row, Container } from "react-bootstrap";
import "./WebsiteStatistics.css";

function WebsiteStatistics() {
  return (
    <Container fluid>
      <Row className="my-3 d-flex justify-content-center website-stats-row px-1 py-3 px-lg-5 py-lg-4">
        <Col xs={3} className="fs-50px d-flex align-items-center justify-content-center active-users ">
          55.8 K+
          <br />
          Active Users
        </Col>
        <Col xs={3} className="fs-sm d-flex align-items-center justify-content-center total-job-post">
          12 k+
          <br />
          Total Job Post
        </Col>
        <Col xs={3} className="fs-sm d-flex align-items-center justify-content-center people-hired">
          24 k+
          <br />
          Peoples Hired
        </Col>
        <Col xs={3} className="fs-sm d-flex align-items-center justify-content-center running-posts">
          18 k+
          <br />
          Running Posts
        </Col>
      </Row>
    </Container>
  );
}

export default WebsiteStatistics;
