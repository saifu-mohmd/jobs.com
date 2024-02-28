import { Col } from "react-bootstrap";
import "./Jobcard.css";

function Jobcard(props) {
  return (
    <Col xs={12} sm={12} md={8} lg={4} className="mb-5 mx-auto">
      <button className="jobcard-body">
        <div className="top-circle">
          <img
            className="jobCard-img"
            src={`${props.jobCardLogo}`}
            alt="jobcard-img"
          />
        </div>
        <div className="jobcard-title mx-auto">{props.jobCardTitle}</div>
        <div className="fs-xs job-para my-2">{props.jobCardContent}</div>
      </button>
    </Col>
  );
}

export default Jobcard;
