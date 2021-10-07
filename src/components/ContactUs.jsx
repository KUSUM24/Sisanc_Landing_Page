import React from "react";
import { Container, Row } from "react-bootstrap";
import Call from "../assets/images/call.png";
import Email from "../assets/images/email.png";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <Container>
        <div class="contact-us-title">
          <h6>Get in Touch</h6>
          <h2>CONTACT US</h2>
          <p>Have any questions? We’d love to hear from you.</p>
        </div>
        <Row>
          <div
            class="col-md-4"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="contact-us-card" id="contact-card-1">
              <div className="contact-icon">
                <img src={Call} alt="Call Us" />
              </div>
              <div className="contact-type">Phone 1</div>
              <div className="contact-detail h3">+91-983 921 1611</div>
              <a
                href="tel:+919839211611"
                className="contact-btn"
                id="contact-btn-1"
              >
                Call Us
              </a>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="contact-us-card" id="contact-card-2">
              {" "}
              <div className="contact-icon">
                <img src={Call} alt="Call Us" />
              </div>
              <div className="contact-type">Phone 2</div>
              <div className="contact-detail h3">+91-878 822 0674</div>
              <a
                href="tel:+918788220674"
                className="contact-btn"
                id="contact-btn-2"
              >
                Call Us
              </a>
            </div>
          </div>
          <div
            class="col-md-4"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <div class="contact-us-card" id="contact-card-3">
              {" "}
              <div className="contact-icon">
                <img src={Email} alt="Call Us" />
              </div>
              <div className="contact-type">Email</div>
              <div className="contact-detail h3">info@sisanc.com</div>
              <a
                href="mailto:info@sisanc.com"
                className="contact-btn"
                id="contact-btn-3"
              >
                Email Us
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
