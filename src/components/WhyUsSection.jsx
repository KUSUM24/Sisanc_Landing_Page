import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Image1 from "../assets/images/strategy.png";
import Image2 from "../assets/images/idea.png";
import Image3 from "../assets/images/shuttle.png";
import WhyUsImg from "../assets/images/whyus.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const WhyUsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, delay: 1 });
    AOS.init({
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
  return (
    <div className="stand-out-sec">
      <Container>
        <Row>
          <div
            class="col-md-8"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <span class="whyus">Why Us</span>
            <h2>What Makes Us Stand Out</h2>

            <div class="single-points">
              <h3>
                <img src={Image1} />
                Perfect Strategy
              </h3>
              <p>
                Based on research and analyzes, we plan to introduce
                revolutionary solutions.
              </p>
            </div>

            <div class="single-points">
              <h3>
                <img src={Image2} />
                Innovative Ideas
              </h3>
              <p>We build electryfing relations between products and humans.</p>
            </div>

            <div class="single-points">
              <h3>
                <img src={Image3} />
                Effective Solutions
              </h3>
              <p>
                Perfectly matched activities allows us to achieve goals in a
                short time.
              </p>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={WhyUsImg} class="img-fluid" />
          </div>
        </Row>
      </Container>
    </div>
  );
};
