import { Col, Row } from "react-bootstrap";
import "./CompaniesCard.css";

function CompaniesCard(props) {
  return (
    <Col xs={12} sm={10} lg={4}>
      <div className="companies-card">
        <div className="logo-title-div">
          <div className="logo-title-body">
            <div className="logo-body">
              <img
                className="company-logo"
                src={`${props.companiesCardLogo}`}
                alt="Companies logo"
              />
            </div>
            <div className="company-title">{props.companiesCardTitle}</div>
          </div>
        </div>
        <div className="designation-rating-body">
          <div className="fs-xs designation">
            {props.companiesCardDesignation}
            <div className="me-5 rating">
              <img className="me-1 star" src="Image/rating.png" alt="rating" />
              {props.companiesRatingCard}
            </div>
          </div>
        </div>

        <Row className="fs-xs">
          <Col xs={1} className="experience-logo">
            <img src="Image/experience.png" alt="Experience-logo" />
          </Col>
          <Col className="fs-xs location-description">
            {props.companiesExperienceDescriptionCard}
          </Col>
        </Row>

        <Row className="fs-xs">
          <Col xs={1} className="location-logo">
            <img src="Image/Location.png" alt="Location-logo" />
          </Col>
          <Col className="fs-xs location-description">
            {props.companiesLocationDescriptionCard}
          </Col>
        </Row>

        <Row className="fs-xs">
          <Col lg={1} className="appoinment-logo">
            <img src="Image/Appoinment.png" alt="Appoinment-logo" />
          </Col>
          <Col className="fs-xs mt-1 experience-description">
            {props.companiesAppoinmentDescriptionCard}
          </Col>
        </Row>

        <Row className="fs-xs">
          <Col lg={1} className="salary-logo">
            <img src="Image/Salary.png" alt="Salary-logo" />
          </Col>
          <Col className="fs-xs mt-1 salary-description">
            {props.companiesSalaryDescriptionCard}
          </Col>
        </Row>

        <Row className="mt-1 fs-xs">
          <Col xs={5} md={3} lg={4} className="pe-0 job-posted-info">
            {props.companiesJobPosted}
          </Col>
          <Col xs={7} md={8} className="ps-0 fs-xs job-applicant-info">
            {props.companiesJobApplicants}
          </Col>
        </Row>

        <Row className="mt-3 fs-xs">
          <Col className="job-description-link-div">
            <a className="fs-xs job-description-link" href="#Link">
              {props.companiesJobDescriptionCard}
              <img
                className="ms-1"
                src="Image/ArrowRight.png"
                alt="arrow-right-img"
              />
            </a>
          </Col>
          <Col className="apply-now-button-div">
            <button className="apply-now-button">Apply Now</button>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default CompaniesCard;
