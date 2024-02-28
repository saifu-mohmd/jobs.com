import { Col } from "react-bootstrap";
import "./Testimonial.css";

function Testimonial(props) {
  return (
    <Col xs={10} md={8} lg={4} className=" mb-5">
      <button className="testimonial">
        <div className="testimonial-left-bottom">
          <div className="testimonial-left-top">
            <img
              src={`${props.image}`}
              alt="Testimonial-img-1"
              className="testimonial-img-1"
            />
          </div>
        </div>

        <div className="ms-3 mt-2 name-designation-rating">
          <div className="name">{props.name}</div>
          <div className="designation">{props.profession}</div>
          <div className="rating-main-div">
            <img
              src="Image/BlueStarImg.png"
              alt="rating"
              className="testimonial-star-img"
            />
            <p className="testimonial-rating">{props.rating}</p>
          </div>
        </div>
        <div className="hangout-img-div">
          <img
            src="Image/hangout.png"
            alt="hangout-img"
            className="hangout-img"
          />
        </div>
        <div>
          <p className="ms-4 testimonial-text-content">{props.quotes}</p>
        </div>
      </button>
    </Col>
  );
}

export default Testimonial;
