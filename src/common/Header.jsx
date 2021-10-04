import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
export const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-3">
            <div class="logo">
              <img src={Logo} alt="Sisanc" class="img-fluid" />
            </div>
          </div>
          <div className="col-md-9">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
      ;
    </div>
  );
};
