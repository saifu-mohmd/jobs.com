import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer-container mt-5">
      <Row>
        <Col className="footer-col">
          <ul className="company-ul">
            <li className="mb-2">
              <span className="company">Company</span>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Home
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Job Search
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Blog
              </a>
            </li>
          </ul>
        </Col>

        <Col className="footer-col">
          <ul className="company-ul">
            <li className="mb-2">
              <span className="company">Services</span>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Employer
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Employee
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Job Search
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Market Search
              </a>
            </li>
          </ul>
        </Col>

        <Col className="footer-col">
          <ul className="company-ul">
            <li className="mb-2">
              <span className="company">Privacy Policy</span>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Fraud Alert
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Trust & Safety
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#link"
              >
                Privacy
              </a>
            </li>
          </ul>
        </Col>

        <Col className="footer-col">
          <ul className="company-ul">
            <li className="mb-2">
              <span className="company d-flex justify-content-center justify-content-md-start">Get Connected With Us</span>
            </li>
            <div className="mailSec d-flex gap-1">
            {/* <div className="bg-primary p-2 mailText">Hello</div> */}
            <input type="text" placeholder='Email Address' className="mailText p-1"/>
            <button className="mailButton">Submit</button>
            </div>
            <li className="d-flex gap-3 justify-content-center justify-content-md-start align-items-center">
              Follow Us On

              <span className="d-flex gap-2 footer-icons">
                <a href="#link" className="instaFooter">
                  <FaInstagram />
                </a>
                <a href="#link" className="instaFooter">
                  <FaTwitter />
                </a>
                <a href="#link" className="instaFooter">
                  <FaFacebookF />
                </a>
                <a href="#link" className="instaFooter">
                  <FaWhatsapp />
                </a>
              </span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

  /* <button className="footer-button"><span className=" d-flex gap-2 footer-icons">
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebookF/>
            <FaWhatsapp/>
            </span>
            </button> */

