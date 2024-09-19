import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import contactBg from "../../assets/images/contact_banner.jpg";
import { FiSmartphone } from "react-icons/fi";
import { CiAt, CiUser } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactLanding() {
  return (
    <>
      <div
        className="relative xl:px-48 lg:px-20 md:px-12 px-10"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25 h-full"></div>
        <div className="relative z-10 h-[80%] flex items-center lg:justify-normal justify-center">
          <h1 className="lg:text-6xl text-5xl font-semibold text-yellow-500 lg:text-left text-center">
            Contact
          </h1>
        </div>
        <div className="relative z-10 text-center h-[20%] flex items-end border-0 lg:justify-normal justify-center">
          <div className="px-4 py-3 flex items-center gap-x-2 border-0 bg-[#f2f2f2] w-fit rounded-tr-md rounded-tl-md">
            <Link to={"/"}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                Home
              </h2>
            </Link>
            <IoIosArrowForward className="text-yellow-500" />
            <h2 className="text-gray-500">Contact</h2>
          </div>
        </div>

        <div className="absolute w-full xl:left-[65%] lg:left-[70%]  transform -translate-x-1/2 bottom-[-400px] max-w-xl bg-white shadow-lg rounded-lg p-10 z-20 hidden lg:block">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Send a message
          </h2>
          <form className="space-y-2">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1" htmlFor="name">
                Name *
              </label>
              <div className="border-2 flex p-2 rounded-md gap-x-2">
                <CiUser className="text-2xl text-black" />
                <input
                  type="name"
                  id="name"
                  className="focus:outline-none  bg-[#fff]"
                  placeholder="Name"
                />
              </div>
            </div>
            {/* Email & Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1" htmlFor="email">
                  Email *
                </label>
                <div className="border-2 flex p-2 rounded-md gap-x-2">
                  <CiAt className="text-2xl text-black" />
                  <input
                    type="email"
                    id="email"
                    className="focus:outline-none  bg-[#fff]"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1" htmlFor="phone">
                  Phone
                </label>
                <div className="border-2 flex p-2 rounded-md gap-x-2">
                  <FiSmartphone className="text-2xl text-black" />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="focus:outline-none  bg-[#fff]"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                className="p-4 border border-gray-300 rounded-md focus:outline-none "
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            {/* <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message <IoIosArrowForward className="inline ml-2" />
              </button>
            </div> */}
            <div className="flex justify-center">
              <div className=" bg-[#537cd9] w-fit font-semibold text-lg text-white rounded hidden lg:block">
                <Link to={"/report/"}>
                  <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
                    Send Message <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
