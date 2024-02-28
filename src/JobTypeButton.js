import { Col } from "react-bootstrap";
import "./JobTypeButton.css";

function JobTypeButton(props) {
  return (
    <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center mt-5">
      <div className="btn jobType">
        <div className="jobType-logo-section">
          <div className="jobType-logo">
            <div className="jobType-img">
              <img
                src={`${props.jobTypeLogo}`}
                alt="job-type-button-logo"
                className="job-type-button-img"
              />
            </div>
          </div>
        </div>
        <div className="jobType-text">
          {props.jobTitle}
          <img
            className="arrow-img"
            src="Image/right-arrow.png"
            alt="right-arrow"
          />
        </div>
      </div>
    </Col>

    // <Row>
    //   <Col className="remote-button">
    //     <div className="btn remote-button-body">
    //       <Row>
    //         <Col>
    //           <h6 className="remote-text">Remote</h6>
    //            </Col>
    //         <Col>
    //           <img
    //             className="arrow-img"
    //             src="Image/right-arrow.png"
    //             alt="right-arrow"
    //           />
    //         </Col>
    //       </Row>
    //       <div className="remote-button-circle-bottom">
    //         <div className="remote-button-circle-top">
    //           <div className="img-div">
    //             <img
    //               className="remote-logo"
    //               src="Image/remote-logo.png"
    //               alt="remote-logo"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Col>
    // </Row>
  );
}

export default JobTypeButton;
