import React, { useState } from "react";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { PiWarningDiamond } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ChatModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="py-3 w-[42%] bg-[#537cd9] rounded-md flex items-center gap-x-2 justify-center"
        onClick={() => setShowModal(true)}
      >
        <IoIosChatboxes /> Chat
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg py-8 px-12 w-full max-w-lg">
            <div className="flex justify-between items-center text-black pb-2 mb-4">
              <div className="flex justify-center w-full">
                <h2 className="text-xl font-semibold">Send a message</h2>
              </div>
              <button
                className=" w-fit"
                onClick={() => setShowModal(false)}
              >
                <FaXmark />
              </button>
            </div>


            <div className="mb-4">
              <textarea
                className="w-full  px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" rows={8}
                placeholder="Describe the issue"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <div className=" bg-[#537cd9] w-fit font-semibold text-lg text-white rounded hidden lg:block">
                <Link to={""}>
                  <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
                    Send  <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
