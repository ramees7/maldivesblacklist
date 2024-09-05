import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import faqBg from "../../assets/images/faq_banner.jpg";

export default function FaqLanding() {
  return (
    <>
      <div
        className="relative xl:px-48 lg:px-20 md:px-12 px-10 "
        style={{
          backgroundImage: `url(${faqBg})`,
          backgroundSize: "cover",
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25 h-full"></div>

        <div className="relative z-10  h-[80%] flex items-center lg:justify-normal justify-center">
          <h1 className="lg:text-6xl text-4xl font-semibold text-white lg:text-left text-center">
            Read <span className="text-yellow-500">FAQ</span>'s
          </h1>
        </div>
        <div className="relative z-10 text-center h-[20%] flex items-end border-0 lg:justify-normal justify-center">
          <div className="px-4 py-3 flex items-center gap-x-2  border-0 bg-[#f2f2f2] w-fit rounded-tr-md rounded-tl-md">
            <Link to={"/"}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                Home
              </h2>
            </Link>
            <IoIosArrowForward className="text-yellow-500" />
            <h2 className="text-gray-500">FAQ</h2>
          </div>
        </div>
      </div>
    </>
  );
}
