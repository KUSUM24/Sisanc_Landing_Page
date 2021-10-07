import React, { useEffect } from "react";
import { Header } from "../common/Header";
import "../assets/styles/style.css";
import { Container, Row } from "react-bootstrap";
import FirstBannerImg from "../assets/images/web-dev.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import animate1 from "../assets/images/animate1.png";
import animate2 from "../assets/images/animate2.png";
import animate3 from "../assets/images/animate3.png";

export const FirstBanner = () => {
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
    <div className="main-banner-sec">
      <Header />
      <div className="header-banner">
        <Container>
          <Row>
            <div class="col-md-5">
              <div
                class="banner-text"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2500"
              >
                <h1>We provide Powerful Web Solutions</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <button class="btn btn-contact">Contact Us</button>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6 header-img">
              <img
                src={FirstBannerImg}
                alt="Sisanc Services"
                class="img-fluid"
                data-aos="fade-left"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2500"
              />
              {/* <div>
                <img className="animate1" src={animate1} />
                <img className="animate2" src={animate2} />
                <img className="animate3" src={animate3} />
              </div> */}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};
