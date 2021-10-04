import React from "react";
import { Footer } from "./common/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
