import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import CallIcon from "../assets/images/call.png";
import EmailIcon from "../assets/images/email.png";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div class="footer-logo">
          <img src={Logo} alt="Sisanc" class="img-fluid" />
        </div>
        <p class="footer-about">
          SISANC Services is a leading and well Known I.T Company that delivers
          quality service to its clients by designing, developing and
          implementing innovative IT Solutions. We feel proud in introducing
          ourselves as one of the professional software company.
        </p>
        <div class="contact-detail">
          <div class="container info con-width">
            <div class="row">
              <div class="col-md-4">
                <div class="item mb-sm50">
                  <span class="icon icon-mobile">
                    <img src={CallIcon} />
                  </span>
                  <div class="cont">
                    <h6>Phone 1</h6>
                    <p>+91-983 921 1611</p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="item mb-sm50">
                  <span class="icon icon-mobile">
                    <img src={CallIcon} />
                  </span>
                  <div class="cont">
                    <h6>Phone 2</h6>
                    <p>+91-878 822 0674</p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="item mb-sm50">
                  <span class="icon icon-mobile">
                    <img src={EmailIcon} />
                  </span>
                  <div class="cont">
                    <h6>Email</h6>
                    <p>info@sisanc.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="copyright">
            <p>© 2020 ALL RIGHTS RESERVED. POWERED BY SISANC SERVICES.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
