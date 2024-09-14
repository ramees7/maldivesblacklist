import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Auth from "../pages/Auth";
import Report from "../pages/Report";
import FraudDetails from "../pages/FraudDetails";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GiRobber } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

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

  const lists = [
    {
      title: "E-Commerce-Fraud",
      link: "e-commerce-fraud",
      icon: <MdOutlineShoppingCart />,
    },
    {
      title: "F-Commerce-Fraud",
      link: "f-commerce-fraud",
      icon: <FaFacebook />,
    },
    {
      title: "Fraud Caller",
      link: "fraud-caller",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Fake Government Website",
      link: "fake-govt-website",
      icon: <FaRegEye />,
    },
    {
      title: "Scammer",
      link: "scammer",
      icon: <GiRobber />,
    },
    {
      title: "Shop Fraud",
      link: "shop-fraud",
      icon: <IoMdHome />,
    },
    {
      title: "Other Issues",
      link: "other-issues",
      icon: <CgMoreO />,
    },
  ];

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

        <Routes>
          <Route path="/" element={<Home lists={lists} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/report" element={<Report />} />
          {
            lists?.map(item=>(
              <Route path={`/ads/${item.link}`} key={item.link} element={<FraudDetails lists={lists}/>} />
            ))
          }
          <Route path={`/ads/all`} element={<FraudDetails lists={lists}/>} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
