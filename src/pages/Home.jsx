import React, { useEffect } from "react";
import HomeLanding from "../components/Home/HomeLanding";
import DiscoverList from "../components/Home/DiscoverList";
import HowWorks from "../components/Home/HowWorks";
import PartnersCarousel from "../components/Home/PartnersCarousel";
import UserExperience from "../components/Home/UserExperience";

export default function Home({lists}) {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    handleToTop()
  },[])
  return (
    <div>
      <HomeLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
        <DiscoverList lists={lists}/>
        <HowWorks/>
        <UserExperience/>
        <PartnersCarousel/>
      </div>
    </div>
  );
}
