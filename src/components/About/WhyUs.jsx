import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function WhyUs() {
  return (
    <div className="pb-16">
      <div>
        <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 mx-auto text-md rounded-lg mb-4">
          Why us?
        </h2>
        <h1 className="text-4xl font-bold mx-auto text-center">
          The Power of Maldives
        </h1>
      </div>
      <div className="grid grid-cols-12 lg:gap-x-20 gap-y-10 py-12">
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
          <img
            src="https://bdblacklist.com/wp-content/uploads/2024/05/About.jpg"
            alt="whyus img"
            className="w-full rounded-lg"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="flex md:justify-normal justify-center">
            <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-2">
              About us
            </h2>
          </div>
          <h1 className="text-4xl font-semibold mb-4 md:text-start text-center">
            Report to Help Fight Fraud!
          </h1>
          <h6 className="mt-2 text-gray-500 mb-5 md:text-start text-center">
            Bangladesh Blacklist is a cybercrime and fraud reporting platform
            for the general public and private organization helping Bangladesh
            Government’s efforts to improve cybersecurity. Our role is to help
            Digital Bangladesh become more safe and secure.
          </h6>
          <div className="md:block hidden">
            <div className=" bg-yellow-500 w-fit font-semibold text-lg text-gray-600 rounded hidden lg:block">
              <Link to={"/report"}>
                <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
                  Repost Now <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
