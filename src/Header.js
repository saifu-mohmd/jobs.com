import { Container, Navbar, Nav, Col } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container fluid className="header">
      <Navbar expand="lg" className="navbar">
        <Col xs={1}>
          <img src="Image/logo.png" alt="Logo" className="img-responsive" />
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation-bar">
          
            <Nav.Link className="nav-link" href="#link">
              Home
            </Nav.Link>
           
            <Nav.Link className="nav-link" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="nav-link" href="#link">
              Features
            </Nav.Link>
            <Nav.Link className="nav-link" href="#link">
              Testimonial
            </Nav.Link>
          </Nav>

          {/* <input type="text"  className="headerSearchIcon">

          </input> */}

<div className='d-flex gap-2 align-items-center'>
        <input type='text' className='headerSearchinput px-3 bg-white  shadow-sm
        w-100%' placeholder='Search Here...'/>
        <button className="search" href="Profile.js">
            <img src="Image/search.png" alt="search-icon" />
          </button>
        </div>

          

          <Link to={'loginpage'}>

          <button className="signIn-icon">
            <img src="Image/sign in.png" alt="sign in signIn-icon" />
          </button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
