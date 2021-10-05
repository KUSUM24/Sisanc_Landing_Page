import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceIcon from "../assets/images/icon1.png";
import "../assets/styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const ServicesSection = () => {
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
    <div className="services">
      <Container>
        <div
          class="title-sec"
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-duration="3000"
        >
          <h4>What we offer</h4>
          <h2>Our Services</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Row>
          {" "}
          <div
            class="col-md-4"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="single-service">
              <div class="icon">
                <img
                  src={ServiceIcon}
                  alt="Sisanc-Services"
                  class="img-fluid"
                />
              </div>

              <h3>Website Designing</h3>
              <p>
                The Website is your Global Business Card. A platform where you
                can showcase your work, sell your product or just share data.
              </p>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="single-service">
              <div class="icon">
                <img
                  src={ServiceIcon}
                  alt="Sisanc-Services"
                  class="img-fluid"
                />
              </div>

              <h3>Website Designing</h3>
              <p>
                The Website is your Global Business Card. A platform where you
                can showcase your work, sell your product or just share data.
              </p>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="single-service">
              <div class="icon">
                <img
                  src={ServiceIcon}
                  alt="Sisanc-Services"
                  class="img-fluid"
                />
              </div>

              <h3>Website Designing</h3>
              <p>
                The Website is your Global Business Card. A platform where you
                can showcase your work, sell your product or just share data.
              </p>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="single-service">
              <div class="icon">
                <img
                  src={ServiceIcon}
                  alt="Sisanc-Services"
                  class="img-fluid"
                />
              </div>

              <h3>Website Designing</h3>
              <p>
                The Website is your Global Business Card. A platform where you
                can showcase your work, sell your product or just share data.
              </p>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="single-service">
              <div class="icon">
                <img
                  src={ServiceIcon}
                  alt="Sisanc-Services"
                  class="img-fluid"
                />
              </div>

              <h3>Website Designing</h3>
              <p>
                The Website is your Global Business Card. A platform where you
                can showcase your work, sell your product or just share data.
              </p>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="single-service">
              <div class="icon">
                <img
                  src={ServiceIcon}
                  alt="Sisanc-Services"
                  class="img-fluid"
                />
              </div>

              <h3>Website Designing</h3>
              <p>
                The Website is your Global Business Card. A platform where you
                can showcase your work, sell your product or just share data.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
