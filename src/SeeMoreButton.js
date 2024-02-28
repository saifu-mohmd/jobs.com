import { Col, Container, Row } from "react-bootstrap";
import "./SeeMoreButton.css";
import { MdKeyboardArrowRight } from "react-icons/md";

function SeeMoreButton() {
  return (
    <Container className="body">
      <Row className="d-flex justify-content-center">
        <Col lg={2} className="d-flex justify-content-center">
          <button className="see-more-button">
            See More
            {/* <img
              src="Image/ArrowRight.png"
              alt="right-arrow"
              className="ms-2 right-arrow-see-more-button"
            /> */}
            <MdKeyboardArrowRight className="mdKeyboardArrowRight"/>

          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default SeeMoreButton;
