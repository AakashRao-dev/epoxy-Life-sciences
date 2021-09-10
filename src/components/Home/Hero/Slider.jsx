import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../../images/Hero_bg1.jpg";
import image2 from "../../../images/Hero_bg2.jpg";
import image3 from "../../../images/Hero_bg3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel controls={false} fade interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h1>
              COMMITMENT TO <br />
              SERVE HUMANITY <br />
              UNIVERSALLY
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h1>
              PIONEERS IN <br />
              GLOBAL PHARMA <br />
              INDUSTRY FROM <br />A LONG TIME{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h1>
              HIGH STANDARDS <br />
              OF MANUFACTURING <br />& QUALITY CONTROL
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
