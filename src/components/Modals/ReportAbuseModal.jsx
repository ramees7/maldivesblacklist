import React, { useState } from "react";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { PiWarningDiamond } from "react-icons/pi";
import { Link } from "react-router-dom";

const ReportAbuseModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-x-3 text-red-600 justify-center text-xl cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <PiWarningDiamond />
        <span>Report abuse</span>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg py-8 px-12 w-full max-w-lg">
            <div className="flex text-black justify-between items-center pb-2 mb-4">
              <div className="flex justify-center w-full">
                <h2 className="text-xl font-semibold">Report Abuse</h2>
              </div>
              <button
                className=" w-fit"
                onClick={() => setShowModal(false)}
              >
                <FaXmark/>
              </button>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Reason Textarea */}
            <div className="mb-4">
              <textarea
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Describe the issue"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <div className=" bg-[#537cd9] w-fit font-semibold text-lg text-white rounded hidden lg:block">
                <Link to={""}>
                  <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
                    Send Message <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportAbuseModal;
