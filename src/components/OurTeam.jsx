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
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail" id="team-member-1">
                <h6 className="card-member-name m-0">pooja Onkar</h6>
                <div className="card-member-designation">UI/UX Designer</div>
                <div className="member-talent">TOP TALENT: Execution</div>
                <div className="member-quote ">
                  "Always ask questions and challenge assumptions."
                </div>
              </div>
              <div className="member-description">
                <div className="member-name">Pooja Onkar</div>
                <div className="member-designation">UI/UX Designer</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail" id="team-member-2">
                <h6 className="card-member-name m-0">pooja Onkar</h6>
                <div className="card-member-designation">UI/UX Designer</div>
                <div className="member-talent">TOP TALENT: Execution</div>
                <div className="member-quote ">
                  "Always ask questions and challenge assumptions."
                </div>
              </div>
              <div className="member-description">
                <div className="member-name">Pooja Onkar</div>
                <div className="member-designation">UI/UX Designer</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail" id="team-member-3">
                <h6 className="card-member-name m-0">pooja Onkar</h6>
                <div className="card-member-designation">UI/UX Designer</div>
                <div className="member-talent">TOP TALENT: Execution</div>
                <div className="member-quote ">
                  "Always ask questions and challenge assumptions."
                </div>
              </div>
              <div className="member-description">
                <div className="member-name">Pooja Onkar</div>
                <div className="member-designation">UI/UX Designer</div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail" id="team-member-4">
                <h6 className="card-member-name m-0">pooja Onkar</h6>
                <div className="card-member-designation">UI/UX Designer</div>
                <div className="member-talent">TOP TALENT: Execution</div>
                <div className="member-quote ">
                  "Always ask questions and challenge assumptions."
                </div>
              </div>
              <div className="member-description">
                <div className="member-name">Pooja Onkar</div>
                <div className="member-designation">UI/UX Designer</div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail" id="team-member-5">
                <h6 className="card-member-name m-0">PRATIKSHA BAKSHETTY</h6>
                <div className="card-member-designation">Graphic Designer</div>
                <div className="member-talent">TOP TALENT: DECISION MAKING</div>
                <div className="member-quote ">
                  "Every flower must grow through dirt."
                </div>
              </div>
              <div className="member-description">
                <div className="member-name">Pratiksha Bakshetty</div>
                <div className="member-designation">Graphic Designer</div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-sec">
              <div className="single-team">
                <img src={member1} className="team-member--img img-fluid" />
              </div>

              <div className="team-detail" id="team-member-6">
                <h6 className="card-member-name m-0">Kusum Rohra</h6>
                <div className="card-member-designation">Web Developer</div>
                <div className="member-talent">TOP TALENT: ADAPTATION</div>
                <div className="member-quote ">
                  "Be somebody who makes everybody feel like a somebody."
                </div>
              </div>
              <div className="member-description">
                <div className="member-name">Kusum Rohra</div>
                <div className="member-designation">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
