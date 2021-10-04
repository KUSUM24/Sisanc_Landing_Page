import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SecondBannerImg from "../assets/images/aboutus.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const SecondBanner = () => {
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
    <div className="about-us-sec">
      <Container>
        <Row>
          <div class="col-md-5">
            <img
              src={SecondBannerImg}
              data-aos="zoom-in-right"
              data-aos-delay="150"
              data-aos-duration="3000"
              alt="About Us"
              class="img-fluid"
            />
          </div>
          <div class="col-md-1"></div>
          <div
            class="col-md-6"
            data-aos="zoom-in-left"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="about-us-text">
              <h2>Take a quick tour of about us!</h2>
              <p>
                SISANC Services is a leading and well Known I.T Company that
                delivers quality service to its clients by designing, developing
                and implementing innovative IT Solutions.
              </p>

              <p>
                SISANC Services is a leading and well Known I.T Company that
                delivers quality service to its clients by designing, developing
                and implementing innovative IT Solutions.
              </p>

              <p>
                We feel proud in introducing ourselves as one of the
                professional software company.
              </p>

              <p>
                Website Designing and Developing your most unique and customer
                centric website exactly the way you want to showcase your brand
                to the world.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
