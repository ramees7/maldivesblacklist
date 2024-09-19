import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function JoinTheFight() {
  return (
    <div className="grid grid-cols-12 lg:gap-x-20 gap-y-10 pt-12">
      <div className="col-span-12 lg:col-span-6">
        <div className="flex md:justify-normal justify-center">
          <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-2">
            Join the fight
          </h2>
        </div>
        <h1 className="text-4xl font-semibold mb-4 md:text-start text-center">
          Report to Help Fight Fraud!
        </h1>
        <h6 className="mt-2 text-gray-500 mb-5 md:text-start text-center">
          You can report fraud or cyber crime using our online reporting service
          any time of the day or night; the service enables you to both report a
          fraud and find help and support.Thanks to our partners, you can find
          ties online to suit every preference and budget, from budget to
          top-of-the-range super stylish models.
        </h6>
        <div className="md:block hidden">
          <div className=" bg-yellow-500 w-fit font-semibold text-lg text-gray-600 rounded hidden lg:block">
            <Link to={"/report/"}>
              <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
                Repost Now <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
        <img
          src="https://bdblacklist.com/wp-content/uploads/2024/05/About.jpg"
          alt="whyus img"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
