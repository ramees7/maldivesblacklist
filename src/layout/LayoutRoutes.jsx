import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Auth from "../pages/Auth";
import Report from "../pages/Report";
import FraudDetails from "../pages/FraudDetails";

import AdsOverview from "../pages/AdsOverview";
import PostedUser from "../pages/PostedUser";
import ErrorBoundary from "./ErrorBoundary";
import Compare from "../pages/Compare";

export default function LayoutRoutes() {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowHeaderNav(true);
      } else {
        setShowHeaderNav(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <BrowserRouter>
      
        <div
          className={`sticky top-0 w-full z-50 transition-transform duration-1000 xl:px-48 lg:px-20 md:px-12 px-5 bg-white ${
            showHeaderNav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Navbar />
        </div>

        {/* <ErrorBoundary> */}
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/faq/" element={<FAQ />} />
            <Route path="/login/" element={<Auth />} />
            <Route path="/register/" element={<Auth />} />
            <Route path="/report/" element={<Report />} />
            <Route path={`/ads/:title/`} element={<FraudDetails />} />
            <Route path={`/ads/:title/:name/`} element={<AdsOverview />} />
            <Route path={`/user/:name/`} element={<PostedUser />} />
            <Route path={`/compare/`} element={<Compare />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
            {/* <Route path="/*" element={<Navigate to="/" replace />} />   add a new page and content is page npt found 404  */}
          </Routes>
        {/* </ErrorBoundary> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
