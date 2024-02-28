import { Col, Row, Container } from "react-bootstrap";
import "./ChooseYourJob.css";
// import JobTypeButton from "./JobTypeButton";

function ChooseYourJob() {
  return (
    <Container fluid className="body">
      <Row>
        <Col>
          <h5 className="mt-5 my-lg-5 d-flex justify-content-center fs-md choose-you-job-heading">
            Choose Your Job Now
          </h5>
        </Col>
      </Row>
      
    </Container>
  );
}

export default ChooseYourJob;
