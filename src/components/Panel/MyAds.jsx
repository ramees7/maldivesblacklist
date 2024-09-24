import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import openBox from "../../assets/images/open-box.png";
import { Link } from "react-router-dom";

export default function MyAds() {
  return (
    <div className="py-10">
      <div className="bg-white h-[500px] flex justify-center items-center flex-col gap-y-6 rounded-lg">
        <h1 className="text-2xl font-semibold">You do not have any ads yet.</h1>
        <img src={openBox} alt="openbox not found" className="w-[100px] h-[100px]" />
        <div className="flex justify-center">
          <Link to={'/panel/create/'} className="bg-yellow-500 w-fit font-semibold text-lg text-white rounded">
            <button
              type="submit"
              className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center"
            >
              Post your ad <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
