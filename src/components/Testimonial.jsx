import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProfileImg from "../assets/images/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Testimonial = () => {
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
    <div className="testimonial">
      <Container>
        <div class="title-sec">
          <h4>Reviews</h4>
          <h2>Our Team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Row>
          <div class="col-md-4">
            <div class="single-testimonial">
              <div class="profile">
                <img src={ProfileImg} class="img-fluid" />
              </div>

              <h3>Pooja Onkar</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
              <h4>UI/UX Designer</h4>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single-testimonial">
              <div class="profile">
                <img src={ProfileImg} class="img-fluid" />
              </div>

              <h3>Pratiksha Bakshetty</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
              <h4>Graphic Designer</h4>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single-testimonial">
              <div class="profile">
                <img src={ProfileImg} class="img-fluid" />
              </div>

              <h3>Kusum Rohra</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm
              </p>
              <h4>Web Developer</h4>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
