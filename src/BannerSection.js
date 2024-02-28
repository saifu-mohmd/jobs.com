import { Col, Row, Container } from "react-bootstrap";
import BannerButton from "./BannerButton";
import "./BannerSection.css";
import "./BannerButton.css";

function BannerSection() {
  return (
    <Container fluid className="body">
      {/* ----------Banner Section---------- */}
      
      <Row>
        <Col xs={12} lg={6} className="my-auto">
          <Row className="text-center text-lg-start ">

            <Col lg={12} className="fs-lg mt-5 mt-lg-0 banner-caption">
            Join our team of experts
            <br />
            and take your <span>career</span>
            <br />
            to the next level
            </Col>

            <Col lg={12}>
            <p className="fs-xs mt-2">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem
                <br />
                Ipsum passages, and more recently with desktop publishing
                software lAldus Page
              </p>
            </Col>

            <Col lg={12}>
            <div className="my-2 download-caption">Download the app</div>
            </Col>

            <Col lg={12}>
            <Row className="d-flex justify-content-center  justify-content-lg-start banner-btn-row">
            <Col xs={12} sm={3} lg={3}>
              <BannerButton
                bannerbuttonimg="./Image/google-play.png"
                bannerbuttontitle="Google Play"
              />
            </Col>

            <Col xs={12} sm={3} lg={5} className="ms-0 ms-sm-3 mt-2 mt-sm-0 apple-store-btn">
              <BannerButton
                bannerbuttonimg="./Image/apple-store-logo.png"
                bannerbuttontitle="Apple Store"
              />
            </Col>
          </Row>
            </Col>

          </Row>
          {/* <Col xs={12} className=" fs-lg banner-caption ">
            Join our team of experts
            <br />
            and take your <span>career</span>
            <br />
            to the next level
            <br />
          </Col>
          <Row>
            <Col xs={12}>
              <p className="fs-xs mt-2">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem
                <br />
                Ipsum passages, and more recently with desktop publishing
                software lAldus Page
              </p>
            </Col>
          </Row>

          <div className="my-2 download-caption">Download the app</div>

          <Row>
            <Col className="col-lg-3">
              <BannerButton
                bannerbuttonimg="./Image/google-play.png"
                bannerbuttontitle="Google Play"
              />
            </Col>

            <Col className="col-lg-3">
              <BannerButton
                bannerbuttonimg="./Image/apple-store-logo.png"
                bannerbuttontitle="Apple Store"
              />
            </Col>
          </Row> */}
        </Col> 

        <Col lg={6} className="d-none d-lg-block">
          <img src="Image/banner.png" alt="banner-img" className="banner-img" />
        </Col>
      </Row>

      {/* <h3 className="choose-your-job">Choose Your Job Now</h3>

     






      <Row className="choose-your-job-inputs">
<Col md={12} className="input1">
  <select className="job-type">
    <option value="option 1" selected disabled>
      Job Type
    </option>
  </select>
</Col>

<Col className="input2">
  <select className="experience">
    <option value="option 2" selected disabled>
      Select Experience
    </option>
  </select>
</Col>

<Col className="input3">
  <select className="location">
    <option value="option 2" selected disabled>
      Select Location
    </option>
  </select>
</Col>
</Row>

<Row>
<Col className="remote-button">
  <div className="btn remote-button-body">
    <Row>
      <Col>
        <h6 className="remote-text">Remote</h6>
      </Col>
      <Col>
        <img
          className="arrow-img"
          src="Image/right-arrow.png"
          alt="right-arrow"
        />
      </Col>
    </Row>
    <div className="remote-button-circle-bottom">
      <div className="remote-button-circle-top">
        <div className="img-div">
          <img
            className="remote-logo"
            src="Image/remote-logo.png"
            alt="remote-logo"
          />
        </div>
      </div>
    </div>
  </div>
</Col>
</Row> */}
    </Container>
  );
}

export default BannerSection;
