import { Col, Row } from "react-bootstrap";
import "./HiringCard.css";

function HiringCard(props) {
  return (
    <Col  xs={12} sm={11} md={9} lg={4} className="hiring-main-div mb-5">
      <Row className="mb-3">
        <Col xs={2} lg={2} className="left-top-main-div">
          <div className="left-top-circle">
            <img
              src={`${props.hiringCardLogo}`}
              alt="Marketing-logo"
              className="marketing-logo"
            />
          </div>
        </Col>
        <Col xs={10} lg={10} className="p-0 title-main-div ps-md-4 ps-lg-2 ms-md-0">
          <h6 className="ms-4 ms-md-4 mt-2 mb-1 marketing">{props.hiringJobType}</h6>
          <h6 className="ms-4 ms-md-4 mt-2 mb-1">{props.hiringJobTitle}</h6>
        </Col>
      </Row>

      <div className="hiring-card">
        <Row className="fs-xs">
          <Col lg={1} className="hiringCard-rating-logo">
            <img src="Image/rating.png" alt="rating-logo" />
          </Col>
          <Col className="fs-xs mt-1 reviews">4.0 - 105 Reviews</Col>
        </Row>

        <Row className="fs-xs">
          <Col lg={1} className="hiringCard-experience-logo">
            <img src="Image/experience.png" alt="experience-logo" />
          </Col>
          <Col className="fs-xs mt-1 experience-description">
            {props.hiringExperience}
          </Col>
        </Row>

        <Row className="fs-xs">
          <Col lg={1} className="hiringCard-location-logo">
            <img src="Image/Location.png" alt="Location-logo" />
          </Col>
          <Col className="fs-xs mt-1 hiringCard-experience-description">
            {props.hiringLocation}
          </Col>
        </Row>

        <Row className="fs-xs">
          <Col lg={1} className="hiringCard-appoinment-logo">
            <img src="Image/Appoinment.png" alt="Appoinment-logo" />
          </Col>
          <Col className="fs-xs mt-1 hiringCard-experience-description">
            {props.hiringAppoinment}
          </Col>
        </Row>

        <Row className="fs-xs">
          <Col lg={1} className="hiringCard-salary-logo">
            <img src="Image/Salary.png" alt="Salary-logo" />
          </Col>
          <Col className="fs-xs mt-1 hiringCard-salary-description">
            {props.hiringSalary}
          </Col>
        </Row>

        <Row className="mt-1 fs-xs">
          <Col xs={5} sm={4} md={3} lg={4} className="pe-0 hiringCard-job-posted-info">
            {props.hiringJobPosted}
          </Col>
          <Col xs={7} sm={4} className="ps-0 fs-xs hiringCard-job-applicant-info">
            {props.hiringJobApplicants}
          </Col>
        </Row>

        <Row className="mt-3 fs-xs">
          <Col className="hiringCard-job-description-link-div">
            <a className="fs-xs hiringCard-job-description-link" href="#Link">
              Job Description
              <img
                className="ms-1"
                src="Image/ArrowRight.png"
                alt="arrow-right-img"
              />
            </a>
          </Col>
          <Col className="hiringCard-apply-now-button-div">
            <button className="hiringCard-apply-now-button">Apply Now</button>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default HiringCard;
