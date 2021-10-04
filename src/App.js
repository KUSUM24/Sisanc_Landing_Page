import React from "react";
import { FirstBanner } from "./components/FirstBanner";
import { SecondBanner } from "./components/SecondBanner";
import { ServicesSection } from "./components/ServicesSection";
import { Testimonial } from "./components/Testimonial";
import { WhyUsSection } from "./components/WhyUsSection";

function App() {
  return (
    <div>
      <FirstBanner />
      <SecondBanner />
      <ServicesSection />
      <WhyUsSection />
      <Testimonial />
    </div>
  );
}

export default App;
