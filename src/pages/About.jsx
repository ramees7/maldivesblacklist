import React, { useEffect } from "react";
import AboutLanding from "../components/About/AboutLanding";
import WhyUs from "../components/About/WhyUs";
import DetailBox from "../components/About/DetailBox";
import HowWorks from "../components/Home/HowWorks";
import JoinTheFight from "../components/About/JoinTheFight";
import UserExperience from "../components/Home/UserExperience";
import PartnersCarousel from "../components/Home/PartnersCarousel";

export default function About() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);
  return (
    <div>
      
      <AboutLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
        <WhyUs />
        <DetailBox />
        <div className="pt-20">
          <HowWorks />
        </div>
        <JoinTheFight/>
        <UserExperience/>
        <PartnersCarousel/>
      </div>
    </div>
  );
}
