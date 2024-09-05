import React, { useEffect } from "react";
import ContactLanding from "../components/Contact/ContactLanding";
import ContactAbout from "../components/Contact/ContactAbout";
import ContactInfo from "../components/Contact/ContactInfo";

export default function Contact() {
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
      <ContactLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
        <ContactAbout />
        <ContactInfo />
      </div>
    </div>
  );
}
