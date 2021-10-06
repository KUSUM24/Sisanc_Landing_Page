import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/styles/style.css";
import member1 from "../assets/images/team1.png";
import member2 from "../assets/images/teamMember2.webp";
import member3 from "../assets/images/teamMember3.webp";
import member4 from "../assets/images/teamMember4.webp";
import member5 from "../assets/images/teamMember5.webp";
import member6 from "../assets/images/teamMember6.webp";

export const OurTeam = () => {
  const [memberDetails, setMemberDetails] = useState(false);
  const [memberNumber, setMemberNumber] = useState();
  const showMemberDetails = (memberNum) => {
    setMemberDetails(true);
    setMemberNumber(memberNum);
  };
  const hideMemberDetails = () => {
    setMemberDetails(false);
    console.log(memberDetails);
  };
  return (
    <div className="team-sec-section">
      <Container>
        <div className="title-sec">
          <div className="h2">Our Team</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* <Row className="our-team-row">
        <div className="col-md-4">
        <div class="team-sec">
        <div class="single-team">
        <img src={member1} class="img-fluid" />
        </div>
        
        <div class="team-detail">
        <h6>Pratiksha</h6>
        </div>
        </div>
        </div>
        <img
        className="team-member--img img-fluid"
        src={member1}
        alt="Team Member 1"
        />
        
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
    </Row> */}
        <div className="row">
          <div className="col-md-4">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail">
                <h6>Pratiksha</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail">
                <h6>Pratiksha</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail">
                <h6>Pratiksha</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
