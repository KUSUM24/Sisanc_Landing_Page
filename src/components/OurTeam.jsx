import React from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/styles/style.css";
import member1 from "../assets/images/teamMember1.webp";
import member2 from "../assets/images/teamMember2.webp";
import member3 from "../assets/images/teamMember3.webp";
import member4 from "../assets/images/teamMember4.webp";
import member5 from "../assets/images/teamMember5.webp";
import member6 from "../assets/images/teamMember6.webp";

export const OurTeam = () => {
  return (
    <Container className="our-team">
      <div className="our-team-title">
        <div className="h2">Our Team</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <Row className="our-team-row">
        <div className="col-md-4">
          <img className="team-member--img" src={member1} alt="Team Member 1" />
        </div>
        <div className="col-md-4">
          <img className="team-member--img" src={member2} alt="Team Member 2" />
        </div>
        <div className="col-md-4">
          <img className="team-member--img" src={member3} alt="Team Member 3" />
        </div>
        <div className="col-md-4 mt-4">
          <img className="team-member--img" src={member4} alt="Team Member 4" />
        </div>
        <div className="col-md-4 mt-4">
          <img className="team-member--img" src={member5} alt="Team Member 5" />
        </div>
        <div className="col-md-4 mt-4">
          <img className="team-member--img" src={member6} alt="Team Member 6" />
        </div>
      </Row>
    </Container>
  );
};
