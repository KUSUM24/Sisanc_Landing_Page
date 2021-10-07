import React from "react";
import { Footer } from "./common/Footer";
import { FirstBanner } from "./components/FirstBanner";
import { OurTeam } from "./components/OurTeam";
import { SecondBanner } from "./components/SecondBanner";
import { ServicesSection } from "./components/ServicesSection";
import { Testimonial } from "./components/Testimonial";
import { WhyUsSection } from "./components/WhyUsSection";
import "./assets/styles/style.css";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div className="main-container">
      <FirstBanner />
      <SecondBanner />
      <ServicesSection />
      <WhyUsSection />
      <Testimonial />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
